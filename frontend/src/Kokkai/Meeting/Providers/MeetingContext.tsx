import { createContext, useContext } from "react";
import type { KokkaiApiContext, SpeechesJson } from "../../Common/types";

export const MeetingsContext = createContext<KokkaiApiContext<SpeechesJson> | null>(null);

export const useMeetings = () => {
    const ctx = useContext(MeetingsContext);
    if (ctx === null) {
        throw new Error("MeetingsContext must be used within a MeetingsProvider.");
    }
    return ctx;
}