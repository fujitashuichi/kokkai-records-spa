import type { MeetingsJson, SpeechesJson } from "./types.data"
import type { ApiResultWithStatus } from "./types.result"

export type KokkaiApiContext<T extends MeetingsJson | SpeechesJson> =
    | { status: "idle" }
    | { status: "loading" }
    | ApiResultWithStatus<T>
