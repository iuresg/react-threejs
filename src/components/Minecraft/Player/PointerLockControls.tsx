import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";

const Controls = () => {
    const controlsRef = useRef();

    const { camera, gl } = useThree()


    return (
        <PointerLockControls
            ref={controlsRef}
            args={[camera, gl.domElement]}
        />
    );
};

export default Controls;
