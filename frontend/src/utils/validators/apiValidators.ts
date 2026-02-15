import type { ValidatedApiResponse } from "../../types/api/types.context";
import { MeetingsJsonSchema, SpeechesJsonSchema, type MeetingsJson, type SpeechesJson } from "../../types/api/types.data";

// バリデーションを行い、Unionで返します

export const validateMeetingsJson = (value: unknown): ValidatedApiResponse<MeetingsJson> => {
    const isOk = isValidMeetings(value);

    if (!isOk) {
        return {
            ok: false,
            error: new Error("Invalid MeetingsJson structure")
        }
    }

    return {
        ok: true,
        value: value
    }
}

export const validateSpeechesJson = (value: unknown): ValidatedApiResponse<SpeechesJson> => {
    const isOk = isValidSpeeches(value);

    if (!isOk) {
        return {
            ok: false,
            error: new Error("Invalid SpeechesJson structure")
        }
    }

    return {
        ok: true,
        value: value
    }
}


const isValidMeetings = (value: unknown): value is MeetingsJson => {
    return  MeetingsJsonSchema.safeParse(value).success;
}
const isValidSpeeches= (value: unknown): value is SpeechesJson => {
    return SpeechesJsonSchema.safeParse(value).success;
}