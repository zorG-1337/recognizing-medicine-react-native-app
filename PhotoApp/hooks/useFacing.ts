import { CameraType } from "expo-camera";
import { useMemo, useState } from "react";

export function useFacing() {
    const [facing, setFacing] = useState<CameraType>('back');

    return useMemo(() => ({facing, setFacing}), [facing, setFacing])
}