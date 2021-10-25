import React, { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { BoxProps } from './interfaces'
import { useBox } from '@react-three/cannon'


export default function Box(props: BoxProps) {
    // This reference will give us direct access to the mesh
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }))
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    // const [active, setActive] = useState(false)
    

    useFrame(() => {
        ref.current.rotation.x = ref.current.rotation.y += props.frame
    })

    return (
        <mesh
            {...props}
            ref={ref}
            onClick={(e) => {
                // setActive(!active)
                api.velocity.set(0,2,0)
                
            }}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'blue'} />
        </mesh>
    )
}