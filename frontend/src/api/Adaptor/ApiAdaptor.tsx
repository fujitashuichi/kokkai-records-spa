import type { ValidatedApiResponse } from "../../types/api/types.context";
import type { MeetingsJson, SpeechesJson } from "../../types/api/types.data";
import { validateMeetingsJson, validateSpeechesJson } from "../../utils/validators/apiValidators";
import { KokkaiApiService } from "../Service/KokkaiApiService";


// !okデータはService層のデータをパイプするだけでよい
// okデータはvalueをバリデーションして返す


export const ApiAdaptor = () => {
    const apiService = new KokkaiApiService();

    const getMeetings = async (): Promise<ValidatedApiResponse<MeetingsJson>> => {
        const response = await apiService.fetchMeetings();

        if (!response.ok) return response;

        return validateMeetingsJson(response);
    }

    const getSpeeches = async (): Promise<ValidatedApiResponse<SpeechesJson>> => {
        const response = await apiService.fetchSpeeches();

        if (!response.ok) return response;

        return validateSpeechesJson(response);
    }


    return {
        getMeetings,
        getSpeeches
    }
}