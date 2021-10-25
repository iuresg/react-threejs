//GLOBAL - components from npm
// import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
//STYLES

//COMPONENTS
import Components from '../../components'

//SERVICES - api, conectors...


//GLOBAL STATE - redux, env...


//ASSETS - icons, images...


export default function Plane() {


    //STATES 


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

            <Physics>
                <Components.Box frame={0.00} position={[-1.2, 0, 0]} />
                <Components.Box frame={0.00} position={[-3.5, 0, 0]} />
                <Components.Box frame={0.00} position={[3.5, 0, 0]} />
                <Components.Plane color={"#3a9065"} position={[0, 0, 0]} />
            </Physics>
            {/* Camera */}
            <PerspectiveCamera position={[4, 4, 4]} makeDefault key={undefined} attach={undefined} attachArray={undefined} attachObject={undefined} args={undefined} onUpdate={undefined} visible={undefined} type={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} zoom={undefined} view={undefined} focus={undefined} near={undefined} far={undefined} updateProjectionMatrix={undefined} setViewOffset={undefined} clearViewOffset={undefined} matrixWorldInverse={undefined} projectionMatrix={undefined} projectionMatrixInverse={undefined} isCamera={undefined} isPerspectiveCamera={undefined} fov={undefined} aspect={undefined} filmGauge={undefined} filmOffset={undefined} setFocalLength={undefined} getFocalLength={undefined} getEffectiveFOV={undefined} getFilmWidth={undefined} getFilmHeight={undefined} setLens={undefined} />
            {/* Controls */}
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
        </Canvas>
    )
}