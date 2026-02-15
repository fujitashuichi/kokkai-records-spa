import type { ValidatedApiResponse } from "./types.adaptor"
import type { MeetingsJson, SpeechesJson } from "./types.data"

export type KokkaiApiContext<T extends MeetingsJson | SpeechesJson> =
    | { status: "idle" }
    | { status: "loading" }
    | ValidatedApiResponse<T>
