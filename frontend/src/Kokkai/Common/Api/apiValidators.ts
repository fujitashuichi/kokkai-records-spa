
// バリデーションを行い、Unionで返します


import { MeetingsJsonSchema, SpeechesJsonSchema, type MeetingsJson, type SpeechesJson, type ValidatedApiResponse } from "../types";


export const validateMeetingsJson = (value: unknown): ValidatedApiResponse<MeetingsJson> => {
    const isOk = isValidMeetings(value);

    if (!isOk) {
        return {
            status: "error",
            error: new Error("Invalid MeetingsJson structure")
        }
    }

    return {
        status: "success",
        value: value
    }
}

export const validateSpeechesJson = (value: unknown): ValidatedApiResponse<SpeechesJson> => {
    const isOk = isValidSpeeches(value);

    if (!isOk) {
        return {
            status: "error",
            error: new Error("Invalid SpeechesJson structure")
        }
    }

    return {
        status: "success",
        value: value
    }
}


const isValidMeetings = (value: unknown): value is MeetingsJson => {
    return  MeetingsJsonSchema.safeParse(value).success;
}
const isValidSpeeches= (value: unknown): value is SpeechesJson => {
    return SpeechesJsonSchema.safeParse(value).success;
}