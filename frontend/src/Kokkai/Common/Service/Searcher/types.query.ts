import * as z from "zod";

////// fetchのクエリ用の型定義。取得データの型ではない

export type searchType = "meeting_list" | "meeting" | "speech";
export type searchTypeMeeting = "meeting_list" | "meeting";
export type searchTypeSpeech = "speech";

export const KokkaiQueryOptionsSchema = z.object({
    startRecord: z.number().int().min(1).default(1).optional()
        .describe("開始位置（1～検索件数）"),
    maximumRecords: z.number().max(100).optional()
        .describe("最大取得件数（meetingsなら1～10。speechesなら1～100）。APIサーバー側にデフォルト値を委ねる"),
    nameOfHouse: z.enum(["衆議院", "参議院", "両院", "両院協議会"]).optional()
        .describe("院名"),
    nameOfMeeting: z.string().optional()
        .describe("本会議、委員会等の会議名（ひらがな可）を指定可能。部分一致検索。半角スペース（U+0020）を区切り文字として複数指定した場合は、指定した語のOR検索となる。"),
    any: z.string().optional()
        .describe("発言内容等に含まれる言葉を指定可能。部分一致検索。半角スペース（U+0020）を区切り文字として複数指定した場合は、指定した語のAND検索となる。"),
    speaker: z.string().optional()
        .describe("発言者名を指定可能。部分一致検索。半角スペース（U+0020）を区切り文字として複数指定した場合は、指定した語のOR検索となる。"),
    from: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).default("0000-01-01").optional()
        .describe("会議録の開会日付の範囲開始を YYYY-MM-DD 形式で指定"),
    until: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).default("9999-12-31").optional()
        .describe("会議録の開会日付の範囲終了を YYYY-MM-DD 形式で指定"),
    supplementAndAppendix: z.boolean().default(false).optional()
        .describe("追録・附録を検索対象に含めるかどうか"),
    contentsAndIndex: z.boolean().default(false).optional()
        .describe("目次・索引を検索対象に含めるかどうか"),
    searchRange: z.enum(["冒頭", "本文", "冒頭・本文"]).default("冒頭・本文").optional()
        .describe("発言内容の検索対象範囲"),
    closing: z.boolean().default(false).optional()
        .describe("閉会中の会議を検索対象に含めるかどうか"),
    speechNumber: z.number().int().min(1).optional()
        .describe("発言番号"),
    speakerPosition: z.string().optional()
        .describe("発言者肩書"),
    speakerGroup: z.string().optional()
        .describe("発言者所属会派"),
    speakerRole: z.enum(["証人", "参考人", "公述人"]).optional()
        .describe("発言者種別"),
    speechID: z.string().optional()
        .describe("発言ID"),
    issueID: z.string().optional()
        .describe("会議録ID"),
    sessionFrom: z.number().int().min(1).optional()
        .describe("国会回次の範囲開始"),
    sessionTo: z.number().int().min(1).optional()
        .describe("国会回次の範囲終了"),
    issueFrom: z.number().int().min(1).optional()
        .describe("号数の範囲開始"),
    issueTo: z.number().int().min(1).optional()
        .describe("号数の範囲終了"),
});


export type KokkaiQueryOptions = z.infer<typeof KokkaiQueryOptionsSchema>;
