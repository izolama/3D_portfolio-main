import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { AnimationMixer, LoopRepeat } from 'three'; // Import LoopRepeat

import planeScene from '../assets/3d/plane.glb';
import planeSoundFile from '../assets/sounds/sound-plane.mp3'; // Import sound file

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function Plane({ isRotating, ...props }) {
  const ref = useRef();
  const mixerRef = useRef(null); // Initialize as null, will be set later
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  const soundRef = useRef(new Audio(planeSoundFile)); // Create a ref for the sound

  useEffect(() => {
    if (!scene || animations.length === 0) return; // Ensure there are animations and scene is loaded

    // Initialize the mixer only once
    mixerRef.current = new AnimationMixer(scene);
    const action = mixerRef.current.clipAction(animations[0]);

    if (isRotating) {
      action.play();
      action.setLoop(LoopRepeat, Infinity); // Make the animation loop
      action.timeScale = 1; // Normal speed

      // Play sound when the plane starts rotating
      if (soundRef.current.paused) {
        soundRef.current.play(); // Play sound
        soundRef.current.loop = true; // Loop the sound
      }
    } else {
      action.stop();
      action.timeScale = 0; // Stop animation smoothly

      // Stop sound when the plane is not rotating
      if (!soundRef.current.paused) {
        soundRef.current.pause(); // Pause the sound
        soundRef.current.currentTime = 0; // Reset to start of the sound
      }
    }

    // Cleanup function to stop the animation and release resources
    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }

      // Stop sound on cleanup
      if (!soundRef.current.paused) {
        soundRef.current.pause();
        soundRef.current.currentTime = 0;
      }
    };
  }, [isRotating, scene, animations]);

  useEffect(() => {
    const animate = () => {
      if (mixerRef.current) {
        mixerRef.current.update(0.01); // Smooth transition of animations
      }
    };

    const interval = setInterval(animate, 16); // 60 fps for smooth updates
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
