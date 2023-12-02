import { Canvas, ThreeElements } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls } from '@react-three/drei';

import './index.css';

interface Custom360ViewerProps {
  enableZoom?: boolean;
  enableRotate?: boolean;
  assetUrl: string;
}

function Model(props: ThreeElements['primitive']) {
  return <primitive {...props} />;
}

const Custom360Viewer = ({
  enableRotate = true,
  enableZoom = true,
  assetUrl,
}: Custom360ViewerProps) => {
  const { scene } = useGLTF(assetUrl);

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
            <Model object={scene} scale={0.01} />
          </Stage>
          <OrbitControls enableRotate={enableRotate} enableZoom={enableZoom} />
        </Canvas>
      )}
    </div>
  );
};

export default Custom360Viewer;
