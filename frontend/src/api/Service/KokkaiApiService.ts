import type { ApiServiceResult } from "../../types/results/types.service";
import { fetchKokkaiMeeting } from "../fetcher"

// KokkaiApiのステータスコードはBoundaryに使用するため、そのまま流す

// APIレスポンスのエラーをError型に変換して返す

export class KokkaiApiService {
    fetchMeetings = async (): Promise<ApiServiceResult> => {
        const response = await fetchKokkaiMeeting();

        if (!response.ok) {
            const errorText = response.statusText || `Error: ${response.status}` || await response.text() || "unknown error";
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

    fetchSpeeches = async (): Promise<ApiServiceResult> => {
        const response = await fetchKokkaiMeeting();

        if (!response.ok) {
            const errorText = response.statusText || `Error: ${response.status}` || await response.text() || "unknown error";
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