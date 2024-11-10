import { CameraView } from "expo-camera";
import { useMemo, useRef } from "react";

export function useCameraView() {
    const cameraRef = useRef<CameraView>(null);

    return useMemo(() => ({cameraRef}), [cameraRef])
}