import type { ApiServiceResult } from "../../types/results/types.service";
import { fetchKokkaiMeeting } from "../fetcher"

// KokkaiApiのステータスコードはBoundaryに使用するため、そのまま流す

export class KokkaiApiService {
    fetchMeetings = async (): Promise<ApiServiceResult> => {
        const response = await fetchKokkaiMeeting();

        if (!response.ok) {
            return {
                ok: false,
                errorCode: response.status
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
            return {
                ok: false,
                errorCode: response.status
            };
        }

        return {
            ok: true,
            value: await response.json()
        };
    }
}