import { useEffect } from 'react';
import { Environment, useGLTF, Float, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === 'Interactive Developer') {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({ color: 'red' });
        }
      });
    }
  }, [model.name, scene]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </>
  );
};

export default function TechIconCanvas({ model }) {
  return (
    <Canvas>
      <TechIcon model={model} />
    </Canvas>
  );
}
