import { usePlane } from '@react-three/cannon'
import { RepeatWrapping, TextureLoader } from 'three';
import { GroundProps } from "./interfaces";
import grass from '../../../assets/textures/grass.jpg'

export default function Ground(props: GroundProps) {

    const [ref] = usePlane(() => ({
        rotation: [- Math.PI / 2, 0, 0],
        mass: 0,
    }))

    const texture = new TextureLoader().load(grass)
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(240, 240)
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
            <meshStandardMaterial map={texture} attach="material"/>
        </mesh>
    )
}