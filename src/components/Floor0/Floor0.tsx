import { useFrame, useLoader } from '@react-three/fiber'
import { Floor0Props } from './interfaces'
import { usePlane } from '@react-three/cannon'
import * as THREE from 'three'
import grama from '../../assets/textures/grama.jpg'

export default function Floor0(props: Floor0Props) {
    // This reference will give us direct access to the mesh

    // Set up state for the hovered and active state

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {

    })

    const [ref] = usePlane(() => ({
        rotation: [- Math.PI / 2, 0, 0],
        mass: 0,
        allowSleep:true
    }))

    const textureFloor = useLoader(THREE.TextureLoader, grama)

    return (
        <mesh
            {...props}
            position={[0,0,0]}
            ref={ref}>
            <planeBufferGeometry attach={"geometry"} args={[100, 100]} />
            <meshLambertMaterial map={textureFloor} attach="material" color={props.color} />
        </mesh>
    )
}