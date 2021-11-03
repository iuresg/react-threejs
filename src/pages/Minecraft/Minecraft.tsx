import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon"
import { Vector3 } from "three";
import MinecraftComponents from '../../components/Minecraft'

export default function Minecraft() {
    return (
        <>
            <Canvas gl={{ alpha: false }} shadows style={{ width: "100wv", height: "100vh" }}>
                <MinecraftComponents.Camera fov={50} />
                <Sky rayleigh={0} turbidity={10} sunPosition={new Vector3(100, 20, 100)} />
                <ambientLight intensity={0.3} />
                <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
                <Physics>
                    <MinecraftComponents.Ground />
                    <MinecraftComponents.Player />
                </Physics>
            </Canvas>
        </>
    )
}