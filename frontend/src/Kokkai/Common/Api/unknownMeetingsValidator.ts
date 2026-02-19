
////// 読み込み可能なUnionを返す

import { MeetingsJsonSchema, type MeetingsJson } from "../types";
import type { ApiResultWithStatus } from "../types/types.result";


// Meetingsの状態が確定する
export const validateMeetingsJson = (value: unknown): ApiResultWithStatus<MeetingsJson> => {
    if (!isRecordFilledMeetings(value)) {
        return {
            status: "noResult"
        }
    }

    const isValid = isValidMeetings(value);
    if (!isValid) {
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


const isRecordFilledMeetings = (value: unknown): boolean => {
    const pickedSchema = MeetingsJsonSchema.pick({ meetingRecord: true });
    return pickedSchema.safeParse(value).success;
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
