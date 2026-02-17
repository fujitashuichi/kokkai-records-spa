import type { ApiResult } from "../types";
import { fetchKokkaiMeeting, fetchKokkaiSpeech } from "./fetcher";
import type { KokkaiQueryOptions, searchTypeMeeting } from "./Searcher/types.query";


// KokkaiApiのステータスコードはBoundaryに使用するため、そのまま流す


// APIレスポンスのエラーをError型に変換して返す

export class KokkaiApiService {
    fetchMeetings = async (searchType: searchTypeMeeting, options: KokkaiQueryOptions): Promise<ApiResult<unknown>> => {
        const response = await fetchKokkaiMeeting(searchType, options);

        if (!response.ok) {
            const errorText = response.statusText || `Error: ${response.status}` || await response.text() || "unknown error";

            console.error("API Error:", errorText);

            return {
                ok: false,
                error: new Error(errorText)
            };
        }

        return {
            ok: true,
            value: await response.json()
        };
    }

    fetchSpeeches = async (options: KokkaiQueryOptions): Promise<ApiResult<unknown>> => {
        const response = await fetchKokkaiSpeech(options);

        if (!response.ok) {
            const errorText = response.statusText || `Error: ${response.status}` || await response.text() || "unknown error";

            console.error("API Error:", errorText);

            return {
                ok: false,
                error: new Error(errorText)
            };
        }

        return {
            ok: true,
            value: await response.json()
        };
    }
}