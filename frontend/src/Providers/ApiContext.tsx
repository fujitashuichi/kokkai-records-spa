import { createContext, useContext } from "react";
import type { KokkaiApiContextType } from "../types/api/types.context";

export const KokkaiApiContext = createContext<KokkaiApiContextType | null>(null);

export const useKokkaiApi = () => {
    const ctx = useContext(KokkaiApiContext);
    if (ctx === null) {
        throw new Error("KokkaiApiContext must be used within a KokkaiApiProvider.");
    }
    return ctx;
}