//GLOBAL - components from npm
// import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, Stars } from '@react-three/drei'
//STYLES
import './style.css'
//COMPONENTS
import Components from '../../components'
import { Link, Router } from 'react-router-dom'
import { useHistory } from 'react-router'


//SERVICES - api, conectors...


//GLOBAL STATE - redux, env...


//ASSETS - icons, images...


export default function Home() {

    
    //STATES 
    const history = useHistory()
    

    //REDUX - Selectors


    //USE EFFECTS


    //FUNCTIONS

    return (<>

        <Canvas style={{ height: "100vh", width: "100vw", background: "#202124", position: "fixed", top: 0, left: 0 }} shadows={true}>
            {/* Canvas Ambient */}
            <ambientLight intensity={0.5} />
            <spotLight color={'red'} position={[10, 15, 10]} angle={0.3} />
            <Stars />

            {/* Use html in canvas */}
            
            <Html center position={[-15, 1, -1]}>
                <Router history={history}>
                    <Link className={"link"} to={"/simple-plane"}>IR PARA SIMPLE PLANE</Link>
                </Router>
            </Html>

            {/* Objects Components */}

            <Components.Text3D fontSize={1} text={"Bem vindo"} color={"white"} position={[0, 1, 0]} />
            <Components.Text3D fontSize={0.5} text={"Ainda não está legal este texto 3d, mas irei melhora-lo em breve!"} color={"white"} position={[0, 0, -2]} />

            {/* Controls */}
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}  />
        </Canvas>
    </>
    )
}