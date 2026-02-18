import { KokkaiQueryOptionsSchema, type KokkaiQueryOptions, type searchType } from "../../types";

export const generateFetchUrl = (
    searchType: searchType,
    options: KokkaiQueryOptions
) => {
    const parsedProps = KokkaiQueryOptionsSchema.safeParse(options);

    if (!parsedProps.success) {
        throw parsedProps.error;
    }


    const cleaned = Object.fromEntries(
        Object.entries(parsedProps.data).filter(
            ([, v]) => v !== undefined && v !== null
        )
    );

    // ["any=解散 選挙", "nameOfHouse=衆議院", ...]
    const queryParam = new URLSearchParams({
        ...cleaned,
        recordPacking: "json"
    })

    return `https://kokkai.ndl.go.jp/api/${searchType}?${queryParam}`;
}