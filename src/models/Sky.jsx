import { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import {
  BufferGeometry,
  Float32BufferAttribute,
  Points,
  PointsMaterial,
  Vector3,
  Color,
  FogExp2,
} from 'three';

import skyScene from '../assets/3d/sky.glb';
import rainSoundFile from '../assets/sounds/rain.mp3'; // Import rain sound file
import thunderSoundFile from '../assets/sounds/thunder.mp3'; // Import thunder sound file

export function Sky({ isRotating }) {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();
  const rainRef = useRef();
  const lightningRef = useRef();
  const [lightningTime, setLightningTime] = useState(0);

  const rainSoundRef = useRef(new Audio(rainSoundFile)); // Rain sound reference
  const thunderSoundRef = useRef(new Audio(thunderSoundFile)); // Thunder sound reference

  const { scene } = useThree();

  const rainColor = 0x3c4e60; // Dark stormy blue-gray
  const lightningColor = 0x7efcff; // Bright cyan-blue for lightning
  const ambientColor = 0x333333; // Soft gray for less intensity
  const fogColor = 0x3c4e60; // Darker but less intense fog

  useEffect(() => {
    scene.fog = new FogExp2(fogColor, 0.03); // Softer fog for better transition
    return () => {
      scene.fog = null;
    };
  }, [scene]);

  const rainParticles = new Points(
    new BufferGeometry(),
    new PointsMaterial({
      color: rainColor,
      size: 0.2,
      opacity: 0.85, // Slightly lower opacity for more subtle effect
      transparent: true,
    })
  );
  const rainCount = 1000; // Lower particle count for a less intense effect
  const rainPositions = [];
  for (let i = 0; i < rainCount; i++) {
    rainPositions.push(
      Math.random() * 100 - 50,
      Math.random() * 100,
      Math.random() * 100 - 50
    );
  }
  rainParticles.geometry.setAttribute(
    'position',
    new Float32BufferAttribute(rainPositions, 3)
  );

  useEffect(() => {
    // Start rain sound when the component mounts
    rainSoundRef.current.loop = true; // Set to loop as long as rain is happening
    rainSoundRef.current.play();

    const flashLightning = setInterval(() => {
      setLightningTime((prev) => {
        const newLightningTime = prev === 0 ? 1 : 0;
        if (newLightningTime === 1) {
          // Play thunder sound when lightning flashes
          thunderSoundRef.current.currentTime = 0; // Reset to start
          thunderSoundRef.current.play();
        }
        return newLightningTime;
      });
    }, Math.random() * 8000 + 5000); // Interval between 5-13 seconds

    return () => {
      // Cleanup sounds on unmount
      rainSoundRef.current.pause();
      thunderSoundRef.current.pause();
      clearInterval(flashLightning);
    };
  }, []); // Empty dependency array to run on mount only

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.1 * delta; // Slow down the cloud rotation
    }

    // Update rain positions for falling effect
    const positions = rainParticles.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] -= 0.3; // Slow down the rain

      if (positions[i + 1] < -50) {
        positions[i + 1] = Math.random() * 100; // Reset rain to top
      }
    }
    rainParticles.geometry.attributes.position.needsUpdate = true;

    // Simulate wind direction with slower movement
    const windDirection = new Vector3(
      Math.sin(delta * 0.2) * 0.05, // Slow wind movement
      0,
      Math.cos(delta * 0.2) * 0.05
    );
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += windDirection.x;
      positions[i + 2] += windDirection.z;
    }

    rainParticles.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <mesh ref={skyRef}>
        <primitive object={sky.scene} />
      </mesh>

      {/* Rain Effect */}
      <primitive object={rainParticles} ref={rainRef} />

      {/* Lightning Effect */}
      <ambientLight
        intensity={lightningTime === 1 ? 0.3 : 0.1} // Softer lighting for realism
        color={new Color(ambientColor)}
      />
      <directionalLight
        intensity={lightningTime === 1 ? 1 : 0.05} // Soft lightning
        color={new Color(lightningColor)}
        position={[0, 50, 0]}
        castShadow={true}
      />
      <directionalLight
        intensity={lightningTime === 1 ? 0.1 : 0.02} // Softer fill light
        color={new Color(ambientColor)}
        position={[10, 50, 0]}
        castShadow={true}
      />
    </>
  );
}
