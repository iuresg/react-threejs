import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { BoxProps } from './interfaces'

export default function Box(props: BoxProps) {
    // This reference will give us direct access to the mesh
    const ref = useRef() as React.MutableRefObject<any>
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        ref.current.rotation.x = ref.current.rotation.y += props.frame
    })

    return (
        <mesh
            {...props}
            ref={ref}
            scale={active ? 1.5 : 1}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'blue'} />
        </mesh>
    )
}