import { lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, OrbitControls } from '@react-three/drei';
const ModelComponent = lazy(() => import('./Model360'));
import './index.css';

interface Custom360ViewerProps {
  enableZoom?: boolean;
  enableRotate?: boolean;
  assetUrl: string;
}

const Custom360Viewer = ({
  enableRotate = true,
  enableZoom = true,
  assetUrl,
}: Custom360ViewerProps) => {
  return (
    <div className="model-viewer-wrapper">
      <h1 className="model-viewer-wrapper__title">3D Model Viewer</h1>
      {assetUrl && (
        <Canvas
          dpr={[1, 2]}
          shadows={false}
          camera={{
            fov: 45,
            near: 1,
            far: 100,
            position: [5, 0, 8],
            aspect: window.innerWidth / window.innerHeight,
          }}
          className="model-viewer-wrapper__canvas"
          style={{ position: 'absolute' }}
        >
          <color attach="background" args={['#f2f2f2']} />
          <Stage>
            <ModelComponent assetUrl={assetUrl} />
          </Stage>
          <OrbitControls enableRotate={enableRotate} enableZoom={enableZoom} />
        </Canvas>
      )}
    </div>
  );
};

export default Custom360Viewer;
