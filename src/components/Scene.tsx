import { Canvas } from '@react-three/fiber';
import { CanvasLoader, CustomShader } from '@/components';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense } from 'react';

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [4, 2, 10], fov: 75 }}
      shadows
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0,
        shadowMapEnabled: true,
        shadowMapType: THREE.PCFSoftShadowMap,
      }}
    >
      <color attach="background" args={['#0a0a0f']} />
      <ambientLight intensity={3} color="#445566" />
      <fog attach="fog" args={['#101520', 6, 15]} />
      <OrbitControls
        enableDamping
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.05}
        minDistance={7}
        maxDistance={14}
      />

      <Suspense fallback={<CanvasLoader />} name={'Cell'}>
        <CustomShader />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
