import { KokkaiApiService } from "../Service";
import type { MeetingsJson, SpeechesJson, ValidatedApiResponse } from "../types";
import { validateMeetingsJson, validateSpeechesJson } from "./apiValidators";


////// このファイルでAPIデータの整形が完了する

// !okデータはService層のデータをパイプするだけ
// okデータはvalueをバリデーションして返す


export const ApiAdaptor = () => {
    const apiService = new KokkaiApiService();

    const getMeetings = async (): Promise<ValidatedApiResponse<MeetingsJson>> => {
        const response = await apiService.fetchMeetings();

        if (!response.ok) {
            return {
                status: "error",
                error: response.error
            };
        };

        return validateMeetingsJson(response);
    }

    const getSpeeches = async (): Promise<ValidatedApiResponse<SpeechesJson>> => {
        const response = await apiService.fetchSpeeches();

        if (!response.ok) {
            return {
                status: "error",
                error: response.error
            };
        };

        return validateSpeechesJson(response);
    }


    return {
        getMeetings,
        getSpeeches
    }
}