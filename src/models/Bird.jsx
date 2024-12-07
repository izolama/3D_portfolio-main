import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';
import {
  Points,
  BufferGeometry,
  Float32BufferAttribute,
  PointsMaterial,
  Color,
} from 'three';

import birdScene from '../assets/3d/bird.glb';

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Bird() {
  const birdRef = useRef();
  const fireRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(birdScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, birdRef);

  // Play the "Take 001" animation when the component mounts
  useEffect(() => {
    actions['Take 001'].play();
  }, [actions]);

  // Create a simple fire particle system
  const fireParticles = new Points(
    new BufferGeometry(),
    new PointsMaterial({
      color: new Color(0xff4500), // Fire color (orange)
      size: 0.2,
      transparent: true,
      opacity: 0.8,
    })
  );

  const fireCount = 200; // Number of fire particles
  const firePositions = [];
  for (let i = 0; i < fireCount; i++) {
    firePositions.push(
      0, // Fire will be emitted from the bird's mouth (positioned at origin initially)
      Math.random() * 2 - 1, // Random Y spread for fire particles
      Math.random() * 2 - 1 // Random Z spread for fire particles
    );
  }
  fireParticles.geometry.setAttribute(
    'position',
    new Float32BufferAttribute(firePositions, 3)
  );

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }

    // Animate fire particles (make them move forward from the mouth)
    const firePositionsArray = fireParticles.geometry.attributes.position.array;
    for (let i = 0; i < firePositionsArray.length; i += 3) {
      firePositionsArray[i + 2] += 0.1; // Fire moves forward
    }
    fireParticles.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
      {/* Attach fire to the bird's mouth position */}
      <primitive object={fireParticles} ref={fireRef} position={[-0.5, 0, 0]} />
    </mesh>
  );
}
