//GLOBAL - components from npm

import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, PerspectiveCamera, Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Vector3 } from 'three'
//STYLES

//COMPONENTS
import Components from '../../components'

//SERVICES - api, conectors...


//GLOBAL STATE - redux, env...


//ASSETS - icons, images...


export default function SimplePlane() {


    //STATES 
    const ref = useRef()

    //REDUX - Selectors


    //USE EFFECTS


    //FUNCTIONS



    return (
        <Canvas style={{ height: "100vh", width: "100vw", background: "#202124" }} shadows={true}>
            {/* Canvas Ambient */}
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Stars />
            {/* Objects Components */}

            <Sky sunPosition={[100, 10, 100]} />
            <Physics>
                <Components.Box frame={0.00} position={new Vector3(0, 0, 0)} />
                <Components.Box frame={0.00} position={new Vector3(-3.5, 0, 0)} />
                <Components.Box frame={0.00} position={new Vector3(3.5, 0, 0)} />
                <Components.Floor0 position={new Vector3(1, 2, 3)} />
            </Physics>
            {/* Camera */}
            <PerspectiveCamera position={[4, 4, 4]} scale={[1, 1, 1]} makeDefault />

            {/* Controls */}
            <OrbitControls ref={ref}
                enablePan={true}
                enableZoom={true} enableRotate={true}
            />
            <axesHelper position={[0, 0, 0]} args={[5]} />
        </Canvas>
    )
}