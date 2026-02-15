import type { MeetingsJson, SpeechesJson } from "./types.data"

export type KokkaiApiContextType = {
    meetings: MeetingsJson,
    speeches: SpeechesJson
}

export type KokkaiApiProvider =
    | { status: "idle" }
    | { status: "loading" }
    | { status: "error", error: Error }
    | { status: "success", data: KokkaiApiContextType }


export type ValidatedApiResponse<T extends MeetingsJson | SpeechesJson> =
    | { ok: true, value: T }
    | { ok: false, error: Error }