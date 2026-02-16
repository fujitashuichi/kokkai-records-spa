import { KokkaiApiService } from "../Service";
import type { MeetingsJson, SpeechesJson } from "../types";
import type { ApiResultWithStatus } from "../types/types.result";
import { validateMeetingsJson, validateSpeechesJson } from "./unknownJsonValidators";


////// このファイルでAPIデータの整形が完了する

// !okデータはService層のデータをパイプするだけ
// okデータはvalueをバリデーションして返す


export const ApiAdaptor = () => {
    const apiService = new KokkaiApiService();

    const getMeetings = async (): Promise<ApiResultWithStatus<MeetingsJson>> => {
        const response = await apiService.fetchMeetings();

        if (!response.ok) {
            console.error("API Error fetching meetings:", response.error);
            return {
                status: "error",
                error: response.error
            };
        };

        return validateMeetingsJson(response.value);
    }

    const getSpeeches = async (): Promise<ApiResultWithStatus<SpeechesJson>> => {
        const response = await apiService.fetchSpeeches();

        if (!response.ok) {
            console.error("API Error fetching speeches:", response.error);
            return {
                status: "error",
                error: response.error
            };
        };

        return validateSpeechesJson(response.value);
    }


    return {
        getMeetings,
        getSpeeches
    }
}