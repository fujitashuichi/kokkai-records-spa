
////// 読み込み可能なUnionを返す

import { SpeechesJsonSchema, type ApiResultWithStatus, type SpeechesJson } from "../types";

// Speechesの状態が確定する
export const validateSpeechesJson = (value: unknown): ApiResultWithStatus<SpeechesJson> => {

    if (!isRecordFilledSpeeches) {
        return {
            status: "noResult"
        }
    }

    const isValid = isValidSpeeches(value);
    if (!isValid) {
        return {
            status: "error",
            error: new Error("Invalid SpeechesJson structure")
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


const isRecordFilledSpeeches = (value: unknown): boolean => {
    const pickedSchema = SpeechesJsonSchema.pick({ speechRecord: true });
    return pickedSchema.safeParse(value).success;
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
