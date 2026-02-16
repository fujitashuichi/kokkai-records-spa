import z from "zod";

export const searchOptionsSchema = z
    .object({
        type: z.enum(["meetings", "speeches"]),

        startRecord: z.number().int().min(1).default(1).optional()
            .describe("開始位置（1～検索件数）"),
        maximumRecords: z.number().int().min(1).max(100).default(30).optional()
            .describe("最大取得件数（1～100）"),
        nameOfHouse: z.enum(["衆議院", "参議院", "両院", "両院協議会"]).optional()
            .describe("院名"),
        nameOfMeeting: z.string().optional()
            .describe("本会議、委員会等の会議名（ひらがな可）を指定可能。部分一致検索。半角スペース（U+0020）を区切り文字として複数指定した場合は、指定した語のOR検索となる。"),
        any: z.string().optional()
            .describe("発言内容等に含まれる言葉を指定可能。部分一致検索。半角スペース（U+0020）を区切り文字として複数指定した場合は、指定した語のAND検索となる。"),
        speaker: z.string().optional()
            .describe("発言者名を指定可能。部分一致検索。半角スペース（U+0020）を区切り文字として複数指定した場合は、指定した語のOR検索となる。"),
        from: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().default("0000-01-01")
            .describe("発言日付の開始日（YYYY-MM-DD形式）"),
        until: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().default("9999-12-31")
            .describe("発言日付の終了日（YYYY-MM-DD形式）"),
        supplementAndAppendix: z.boolean().optional().default(false)
            .describe("追録・附録を含めるか"),
        contentsAndIndex: z.boolean().optional().default(false)
            .describe("目次・索引を含めるか"),
        searchRange: z.enum(["冒頭", "本文", "冒頭・本文"]).optional().default("冒頭・本文")
            .describe("検索対象範囲"),
        closing: z.boolean().optional().default(false)
            .describe("閉会中の会議を含めるか"),
        speechNumber: z.number().int().optional()
            .describe("発言番号"),
        speakerPosition: z.string().optional()
            .describe("発言者肩書"),
        speakerGroup: z.string().optional()
            .describe("発言者所属会派"),
        speakerRole: z.enum(["証人", "参考人", "公述人"]).optional()
            .describe("発言者役割"),
        speechID: z.string().optional()
            .describe("発言ID"),
        issueID: z.string().optional()
            .describe("会議録ID"),
        sessionFrom: z.number().int().optional()
            .describe("国会回次（開始）"),
        sessionTo: z.number().int().optional()
            .describe("国会回次（終了）"),
        issueFrom: z.number().int().optional()
            .describe("号数（開始）"),
        issueTo: z.number().int().optional()
            .describe("号数（終了）"),
        recordPacking: z.enum(["xml", "json"]).optional().default("xml")
            .describe("返却形式"),
    })
    .refine((data) => {
        if (data.type === "meetings" && data.maximumRecords != null) {
            return data.maximumRecords <= 10;
        }

        return true;
    }, {
        message: "meetings の maximumRecords は 10 以下を指定してください。",
        path: ["maximumRecords"],
    });

export const KokkaiQuerySchema = searchOptionsSchema.omit({ type: true });

export type KokkaiQueryProps = z.infer<typeof KokkaiQuerySchema>;
