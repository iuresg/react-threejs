import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { PlayerProps } from "./interfaces";
import PointerLockControl from "./PointerLockControls";

export default function Player(props: PlayerProps) {
    const { camera } = useThree()

    const [ref,] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [-1, 10, 0]
    }))

    useFrame(() => {
        camera.position.copy(ref.current.position)
    })

    return (
        <>
            <mesh ref={ref}>
                <PointerLockControl />
            </mesh>
        </>
    )

}