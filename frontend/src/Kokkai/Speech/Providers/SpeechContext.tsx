import { createContext, useContext } from "react";
import type { KokkaiApiContext, SpeechesJson } from "../../Common/types";

export const SpeechesContext = createContext<KokkaiApiContext<SpeechesJson> | null>(null);

export const useSpeechesCtx = () => {
    const ctx = useContext(SpeechesContext);
    if (ctx === null) {
        throw new Error("SpeechesContext must be used within a SpeechesProvider.");
    }
    return ctx;
}

export const useSpeeches = (): SpeechesJson => {
    const speeches = useSpeechesCtx();
    if (speeches.status !== "success") {
        throw new Error("SpeechesBoundary should be used within a SpeechesProvider");
    }
    return speeches.value;
}
