/* eslint-disable react-hooks/exhaustive-deps */
import { useThree } from '@react-three/fiber'
import {  useRef, useLayoutEffect } from 'react'
import { CameraProps } from './interfaces'

export default function Camera(props: CameraProps) {
    const ref = useRef()
    const set = useThree((state) => state.set)

    useLayoutEffect(() => {
        set({ camera: ref.current })
    }, [set])

    return <perspectiveCamera ref={ref} {...props}/>
}