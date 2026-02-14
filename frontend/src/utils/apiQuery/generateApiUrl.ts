////// 使い方

// generateApiUrl(type = { any: "科学技術" }) のように使います.

//  { パラメータ名: 値 }  のように指定します.
// 以下のURLにパラメータ一覧があります.
// https://kokkai.ndl.go.jp/api.html#:~:text=%E3%81%AA%E6%A4%9C%E7%B4%A2%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF-,%E8%A1%A8%EF%BC%91%EF%BC%9A%E6%A4%9C%E7%B4%A2%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF,-%E9%A0%85%E7%95%AA


import type { KokkaiQueryProps } from "../../types/api/types.api"

export const generateApiUrl = (
    type: "meeting" | "speech",
    options: Partial<KokkaiQueryProps> = {}
) => {
    const typeQuery = type === "meeting" ? "meeting_list" : "speech";
    const optionsQuery = generateSearchOption(options);

    return "https://kokkai.ndl.go.jp/api/" + typeQuery + optionsQuery;
}


const generateSearchOption = (props: Partial<KokkaiQueryProps>) => {
    const params = new URLSearchParams();

    (Object.keys(props) as Array<keyof KokkaiQueryProps>)
        .forEach((key) => {
            const value = props[key];
            if (value != null) {
                params.append(key, String(value));
            }
    });

    const queryString = params.toString();
    return queryString ? `?${queryString}` : "";
}
