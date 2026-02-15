import z from "zod"


export const SpeechInMeetingsSchema = z.object({
    "speechID": z.string(),
    "speechOrder": z.number().int(),
    "speaker": z.string(),
    "speakerYomi": z.string(),
    "speakerGroup": z.string(),
    "speakerPosition": z.string(),
    "speakerRole": z.string(),
    "speech": z.string(),
    "startPage": z.number().int(),
    "createTime": z.string(),
    "updateTime": z.string(),
    "speechURL": z.string(),
});
export type SpeechInMeetings = z.infer<typeof SpeechInMeetingsSchema>;


export const MeetingSchema = z.object({
    "issueID": z.string(),
    "imageKind": z.string(),
    "searchObject": z.string(),
    "session": z.string(),
    "nameOfHouse": z.string(),
    "nameOfMeeting": z.string(),
    "issue": z.string(),
    "date": z.string(),
    "closing": z.string(),
    "speechRecord": z.array(SpeechInMeetingsSchema),
    "meetingURL": z.string(),
    "pdfURL": z.string(),
});
export type Meeting = z.infer<typeof MeetingSchema>;


export const MeetingsJsonSchema = z.object({
    "numberOfRecords": z.number().int(),
    "numberOfReturn": z.number().int(),
    "startRecord": z.number().int(),
    "nextRecordPosition": z.number().int(),
    "meetingRecord": z.array(MeetingSchema),
});
export type MeetingsJson = z.infer<typeof MeetingsJsonSchema>;


export const SpeechInSpeechesSchema = z.object({
    "speechID": z.string(),
    "issueID": z.string(),
    "imageKind": z.string(),
    "searchObject": z.string(),
    "session": z.string(),
    "nameOfHouse": z.string(),
    "nameOfMeeting": z.string(),
    "issue": z.string(),
    "date": z.string(),
    "closing": z.boolean(),
    "speechOrder": z.number().int(),
    "speaker": z.string(),
    "speakerYomi": z.string(),
    "speakerGroup": z.string(),
    "speakerPosition": z.string(),
    "speakerRole": z.string(),
    "speech": z.string(),
    "startPage": z.number().int(),
    "speechURL": z.string(),
    "meetingURL": z.string(),
    "pdfURL": z.string(),
});
export type SpeechInSpeeches = z.infer<typeof SpeechInSpeechesSchema>;


export const SpeechesJsonSchema = z.object({
    "numberOfRecords": z.string(),
    "numberOfReturn": z.string(),
    "startRecord": z.number().int(),
    "nextRecordPosition": z.number().int(),
    "speechRecord": z.array(SpeechInSpeechesSchema),
});
export type SpeechesJson = z.infer<typeof SpeechesJsonSchema>;
