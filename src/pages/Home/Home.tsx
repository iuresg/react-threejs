//GLOBAL - components from npm
// import { useRef, useState } from 'react'
import { Canvas,  } from '@react-three/fiber'
//STYLES

//COMPONENTS
import Components from '../../components'

//SERVICES - api, conectors...


//GLOBAL STATE - redux, env...


//ASSETS - icons, images...


export default function Home() {
    
    
    //STATES 
    
    
    //REDUX - Selectors
    
    
    //USE EFFECTS
    
    
    //FUNCTIONS
    
    
    return (
        <Canvas style={{height:"100vh"}} shadows >
            <ambientLight intensity={0.2} />
            <Components.Box frame={0.01} position={[-1.2, 0, 0]}/>
            <Components.Box  frame={0.02}position={[-3.5, 0, 0]}/>
            
        </Canvas>
    )
}