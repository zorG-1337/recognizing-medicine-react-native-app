import { useMemo, useState } from "react";

export function useStartScreen() {
    const [startScreen, setStartScreen] = useState<boolean>(true)

    return useMemo(() => ({startScreen, setStartScreen}), [startScreen, setStartScreen])
}