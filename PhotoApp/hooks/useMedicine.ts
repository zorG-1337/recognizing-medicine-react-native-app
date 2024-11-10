import { useMemo, useState } from "react";
import { MedicineType, MessageType } from "../types";

export function useMedicine() {
    const [medicine, setMedicine] = useState<null | MedicineType | MessageType>(null);

    return useMemo(() => ({medicine, setMedicine}), [medicine, setMedicine])
}