import { createContext, useContext } from "react";
import type { KokkaiApiContext, MeetingsJson } from "../../Common/types";

export const MeetingsContext = createContext<KokkaiApiContext<MeetingsJson> | null>(null);

export const useMeetingsCtx = (): KokkaiApiContext<MeetingsJson> => {
    const ctx = useContext(MeetingsContext);
    if (ctx === null) {
        throw new Error("MeetingsContext must be used within a MeetingsProvider.");
    }
    return ctx;
}

export const useMeetings = (): MeetingsJson => {
    const { data: meetings } = useMeetingsCtx();
    if (meetings.status !== "success") {
        throw new Error("MeetingBoundary must be used within a MeetingsProvider");
    }
    return meetings.value;
}

export const useSearchMeetings = () => {
    const { search: search } = useMeetingsCtx();
    return search;
}
