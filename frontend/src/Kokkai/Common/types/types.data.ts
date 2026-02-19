import z from "zod"

/// API仕様に基づくJSONのデータ型

// 原則、コメントには "API仕様の項目名" を使用する



///////////////////////////////////////////////
//            meeting_list 関連
///////////////////////////////////////////////


////// meetingRecordの一部: speechRecord //////

export const SpeechInMeetingsSchema = z.object({
    "speechID": z.string(),
    "speechOrder": z.number().int(),
    "speaker": z.string(),
    "speechURL": z.string(),

    "speakerYomi": z.string().nullable().optional(),
    "speakerGroup": z.string().nullable().optional(),
    "speakerPosition": z.string().nullable().optional(),
    "speakerRole": z.string().nullable().optional(),
    "speech": z.string().nullable().optional(),
    "startPage": z.number().int().nullable().optional(),
    "createTime": z.string().nullable().optional(),
    "updateTime": z.string().nullable().optional(),

});
export type SpeechInMeetings = z.infer<typeof SpeechInMeetingsSchema>;



////// meeting_listの一部: meetingRecord //////

export const MeetingSchema = z.object({
    "issueID": z.string(),
    "imageKind": z.string(),
    "searchObject": z.number().int(),
    "session": z.number(),
    "nameOfHouse": z.string(),
    "nameOfMeeting": z.string(),
    "issue": z.string(),
    "date": z.string(),
    "speechRecord": z.array(SpeechInMeetingsSchema),
    "meetingURL": z.string(),

    "closing": z.string().nullable().optional(),
    "pdfURL": z.string().nullable().optional(),
});
export type Meeting = z.infer<typeof MeetingSchema>;



////// Meeting_list全体 //////

export const MeetingsJsonSchema = z.object({
    "numberOfRecords": z.number().int(),
    "numberOfReturn": z.number().int(),
    "startRecord": z.number().int(),

    "meetingRecord": z.array(MeetingSchema).nullable().optional(),
    "nextRecordPosition": z.number().int().nullable().optional(),
});
export type MeetingsJson = z.infer<typeof MeetingsJsonSchema>;



/////////////////////////////////////////
//           speech 関連
/////////////////////////////////////////


////// speechの一部: speechRecord //////

export const SpeechInSpeechesSchema = z.object({
    "speechID": z.string(),
    "issueID": z.string(),
    "imageKind": z.string(),
    "searchObject": z.number().int(),
    "session": z.number().int(),
    "nameOfHouse": z.string(),
    "nameOfMeeting": z.string(),
    "issue": z.string(),
    "date": z.string(),
    "speechOrder": z.number().int(),
    "speaker": z.string(),
    "speech": z.string(),
    "startPage": z.number().int(),
    "speechURL": z.string(),
    "meetingURL": z.string(),

    "closing": z.boolean().nullable().optional(),
    "speakerYomi": z.string().nullable().optional(),
    "speakerGroup": z.string().nullable().optional(),
    "speakerPosition": z.string().nullable().optional(),
    "speakerRole": z.string().nullable().optional(),
    "pdfURL": z.string().nullable().optional(),
});
export type SpeechInSpeeches = z.infer<typeof SpeechInSpeechesSchema>;


////// speech全体 //////

export const SpeechesJsonSchema = z.object({
    "numberOfRecords": z.number().int(),
    "numberOfReturn": z.number().int(),
    "startRecord": z.number().int(),
    "speechRecord": z.array(SpeechInSpeechesSchema),

    "nextRecordPosition": z.number().int().nullable().optional(),
});
export type SpeechesJson = z.infer<typeof SpeechesJsonSchema>;
