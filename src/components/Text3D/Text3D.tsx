import { useFrame, } from '@react-three/fiber'
// import { usePlane } from '@react-three/cannon'
import { useRef } from 'react'
import { TextProps } from './interfaces'
import { Text } from '@react-three/drei'



export default function Text3D(props: TextProps) {
    const ref = useRef()

    useFrame(() => { })


    return (

        <Text
            {...props}
            ref={ref}
            castShadow
        >
            {props.text}
        </Text>
    )
}