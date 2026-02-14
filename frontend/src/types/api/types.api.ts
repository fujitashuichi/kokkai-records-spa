import * as z from "zod";

export const KokkaiQuerySchema = z.object({
    startRecord: z.number().int().min(1).optional().default(1),
    maximumRecords: z.number().int().optional(),
    nameOfHouse: z.enum(["衆議院","参議院","両院","両院協議会"]).optional(),
    nameOfMeeting: z.string().optional(),
    any: z.string().optional(),
    speaker: z.string().optional(),
    from: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().default("0000-01-01"),
    until: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().default("9999-12-31"),
    supplementAndAppendix: z.boolean().optional().default(false),
    contentsAndIndex: z.boolean().optional().default(false),
    searchRange: z.enum(["冒頭","本文","冒頭・本文"]).optional().default("冒頭・本文"),
    closing: z.boolean().optional().default(false),
    speechNumber: z.number().int().optional(),
    speakerPosition: z.string().optional(),
    speakerGroup: z.string().optional(),
    speakerRole: z.enum(["証人","参考人","公述人"]).optional(),
    speechID: z.string().optional(),
    issueID: z.string().optional(),
    sessionFrom: z.number().int().optional(),
    sessionTo: z.number().int().optional(),
    issueFrom: z.number().int().optional(),
    issueTo: z.number().int().optional(),
    recordPacking: z.enum(["xml","json"]).optional().default("xml"),
});

export type KokkaiQueryProps = z.infer<typeof KokkaiQuerySchema>;
