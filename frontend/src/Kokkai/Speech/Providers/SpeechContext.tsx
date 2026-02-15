import { createContext, useContext } from "react";
import type { KokkaiApiContext, SpeechesJson } from "../../Common/types";

export const SpeechesContext = createContext<KokkaiApiContext<SpeechesJson> | null>(null);

export const useSpeeches = () => {
    const ctx = useContext(SpeechesContext);
    if (ctx === null) {
        throw new Error("SpeechesContext must be used within a SpeechesProvider.");
    }
    return ctx;
}