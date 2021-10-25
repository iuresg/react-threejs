import { useFrame } from '@react-three/fiber'
import { PlanProps } from './interfaces'
import { usePlane } from '@react-three/cannon'

export default function Plane(props: PlanProps) {
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

    return (
        <mesh
            {...props}
            ref={ref}>
            <planeBufferGeometry attach={"geometry"} args={[100, 100]} />
            <meshLambertMaterial attach="material" color={props.color} />
        </mesh>
    )
}