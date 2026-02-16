// 全てJSONを返します.

// 検索条件を固定して試す段階です.

export const fetchKokkaiMeeting = async () => {
    const url = `https://kokkai.ndl.go.jp/api/meeting_list?any=%E7%A7%91%E5%AD%A6%E6%8A%80%E8%A1%93&recordPacking=json`;
    const response = await fetch(url);
    console.log("fetch: Meeting_list");
    return response;
}

export const fetchKokkaiSpeech = async () => {
    const url = "https://kokkai.ndl.go.jp/api/speech?any=%E7%A7%91%E5%AD%A6%E6%8A%80%E8%A1%93&recordPacking=json";
    const response = await fetch(url);
    console.log("fetch: Speech");
    return response;
}