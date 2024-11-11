import { useMemo, useState } from "react";
import { Languages } from "../types";

export function useLanguage() {
    const [language, setLanguage] = useState<Languages>(Languages.English)

    return useMemo(() => ({language, setLanguage}), [language, setLanguage])
}