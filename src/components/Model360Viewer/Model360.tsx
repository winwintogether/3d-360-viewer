import { useGLTF } from '@react-three/drei';

function Model({ assetUrl }: { assetUrl: string}) {
  const { scene } = useGLTF(assetUrl);
  return <primitive object={scene} scale={0.01} />;
}

export default Model;
