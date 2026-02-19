
// Successケースのunknownデータをバリデーションし、Result型に整形して返す


import { MeetingsJsonSchema, SpeechesJsonSchema, type MeetingsJson, type SpeechesJson } from "../types";
import type { ApiResultWithStatus } from "../types/types.result";


export const validateMeetingsJson = (value: unknown): ApiResultWithStatus<MeetingsJson> => {
    if (value instanceof Array && value.length === 0) {
        return {
            status: "error",
            error: new Error("合致する検索結果はありませんでした")
        }
    }

    const isValid = isValidMeetings(value);

    if (!isValid) {
        return {
            status: "noResult"
        }
    }

    if (value.numberOfRecords === 0) {
        return {
            status: "noResult"
        }
    }

    return {
        status: "success",
        value: value
    }
}

export const validateSpeechesJson = (value: unknown): ApiResultWithStatus<SpeechesJson> => {
    const isOk = isValidSpeeches(value);

    if (!isOk) {
        return {
            status: "error",
            error: new Error("Invalid SpeechesJson structure")
        }
    }

    if (value.numberOfRecords === 0) {
        return {
            status: "error",
            error: new Error("No search hits")
        }
    }

    return {
        status: "success",
        value: value
    }
}


const isValidMeetings = (value: unknown): value is MeetingsJson => {
    if (!value) {
        console.error("MeetingsJson is null or undefined");
        return false;
    }

    const result = MeetingsJsonSchema.safeParse(value);

    if (!result.success) {
        const errors = result.error.issues.map(e => ({
            path: e.path.join("."),
            message: e.message
        }));

        console.error("Invalid MeetingsJson structure (lightweight):", errors);
    }

    return result.success;
}

const isValidSpeeches= (value: unknown): value is SpeechesJson => {
    if (!value) {
        console.error("SpeechesJson is null or undefined");
        return false;
    }

    const result = SpeechesJsonSchema.safeParse(value);

    if (!result.success) {
        const errors = result.error.issues.map(e => ({
            path: e.path.join("."),
            message: e.message
        }));

        console.error("Invalid SpeechesJson structure (lightweight):", errors);
    }

    return result.success;
}
