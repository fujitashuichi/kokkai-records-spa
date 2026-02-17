import type { KokkaiQueryOptions, searchTypeMeeting, searchTypeSpeech } from "../Service/Searcher/types.query";
import type { MeetingsJson, SpeechesJson } from "./types.data"
import type { ApiResultWithStatus } from "./types.result"

type searchFunc<T extends searchTypeMeeting | searchTypeSpeech> =
    | ((searchType: T, options: KokkaiQueryOptions) => void)
    | ((searchType: T, options: KokkaiQueryOptions) => void)


type ResolveSearchType<T> = T extends MeetingsJson ? searchTypeMeeting : searchTypeSpeech;

export type KokkaiApiContext<T extends MeetingsJson | SpeechesJson> = {
    data: { status: "idle" }
        | { status: "loading" }
        | ApiResultWithStatus<T>,
    search: searchFunc<ResolveSearchType<T>>
}

export type SuccessKokkaiApiContext<T extends MeetingsJson | SpeechesJson> = {
    data: T,
    search: searchFunc<ResolveSearchType<T>>
}