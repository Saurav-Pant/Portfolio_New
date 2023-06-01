import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { useSpring } from "react-spring";
import { TextureLoader } from "three";

const RotatingBox = () => {
  const meshRef = useRef();

  const texture = new TextureLoader().load("../assets/cracks.jpg");

  const { rotation } = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [Math.PI / 2, Math.PI / 2, 0] },
    loop: true,
    config: { duration: 2000 },
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation.get()[0];
      meshRef.current.rotation.y = rotation.get()[1];
      meshRef.current.rotation.z = rotation.get()[2];
    }
  });

  return (
    <Box
      position={[0, 0, 0]}
      rotation={rotation}
      args={[1, 1, 1]}
      ref={meshRef}
    >
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </Box>
  );
};

const Home = () => {
  return (
    <div className="">
      <nav>
        <h1 className="text-red-300 bg-black h-12 text-center ">My 3D Scene</h1>
      </nav>
      <Canvas
        style={{ height: "calc(100vh - 64px)" }}
        camera={{ position: [0, 10, 5] }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <RotatingBox />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Home;
