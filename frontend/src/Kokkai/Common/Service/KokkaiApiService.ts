import type { ApiResult } from "../types";
import { fetchKokkaiMeeting, fetchKokkaiSpeech } from "./fetcher";


// KokkaiApiのステータスコードはBoundaryに使用するため、そのまま流す


// APIレスポンスのエラーをError型に変換して返す

export class KokkaiApiService {
    fetchMeetings = async (): Promise<ApiResult<unknown>> => {
        const response = await fetchKokkaiMeeting();

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

    fetchSpeeches = async (): Promise<ApiResult<unknown>> => {
        const response = await fetchKokkaiSpeech();

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