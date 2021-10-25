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
            key={''} attach={undefined}
            attachArray={undefined}
            attachObject={undefined} args={undefined}
            onUpdate={undefined} visible={undefined}
            type={undefined} id={undefined}
            uuid={undefined} name={undefined}
            parent={undefined}
            modelViewMatrix={undefined} normalMatrix={undefined}
            matrixWorld={undefined} matrixAutoUpdate={undefined}
            matrixWorldNeedsUpdate={undefined} receiveShadow={undefined}
            frustumCulled={undefined}
            renderOrder={undefined} animations={undefined} userData={undefined}
            customDepthMaterial={undefined} customDistanceMaterial={undefined}
            isObject3D={undefined}
            onBeforeRender={undefined}
            onAfterRender={undefined}
            applyMatrix4={undefined}
            applyQuaternion={undefined}
            setRotationFromAxisAngle={undefined}
            setRotationFromEuler={undefined}
            setRotationFromMatrix={undefined}
            setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined}
            rotateX={undefined}
            rotateY={undefined}
            rotateZ={undefined} translateOnAxis={undefined} translateX={undefined}
            translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined}
            add={undefined} remove={undefined}
            clear={undefined}
            getObjectById={undefined} getObjectByName={undefined}
            getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined}
            getWorldDirection={undefined}
            raycast={undefined} 
            traverse={undefined} 
            traverseVisible={undefined} 
            traverseAncestors={undefined}
             updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} material={undefined} geometry={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined}
             ref={ref}
             castShadow
             {...props}
             >
            {props.text}
        </Text>
    )
}