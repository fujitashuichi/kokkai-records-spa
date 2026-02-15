import type { MeetingsJson, SpeechesJson } from "./types.data";

export type ValidatedApiResponse<T extends MeetingsJson | SpeechesJson> =
    | { status: "success", value: T }
    | { status: "error", error: Error }