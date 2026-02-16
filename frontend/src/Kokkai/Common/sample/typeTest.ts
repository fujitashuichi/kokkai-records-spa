// 型定義が正しいかをテストする

import sampleMeetingsJson from "./meetings.json"
import sampleSpeechesJson from "./speeches.json"

import { MeetingsJsonSchema, SpeechesJsonSchema } from "../types";

export const TestApiTypesValid = async (): Promise<void> => {
    const testMeetings = async () => {
        console.log("Sample meetings.json:", sampleMeetingsJson);

        const meetingsResult = MeetingsJsonSchema.safeParse(sampleMeetingsJson);
        if (!meetingsResult.success) {
            console.error("MeetingsJsonSchema is invalid:", meetingsResult.error);
            return;
        }
        console.log("Test OK: MeetingsJsonSchema is valid.");
    }

    const testSpeeches = async () => {
        console.log("Sample speeches.json:", sampleSpeechesJson);

        const speechesResult = SpeechesJsonSchema.safeParse(sampleSpeechesJson);
        if (!speechesResult.success) {
            console.error("SpeechesJsonSchema is invalid:", speechesResult.error);
            return;
        }
        console.log("Test OK: SpeechesJsonSchema is valid.");
    }


    testMeetings();
    testSpeeches();
}