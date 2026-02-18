import type { KokkaiQueryOptions } from "../types";
import { generateFetchUrl } from "./Searcher";


export const fetchKokkaiMeeting = async (searchType: "meeting" | "meeting_list" ,options: KokkaiQueryOptions) => {
    const url = generateFetchUrl(searchType, options);
    const response = await fetch(url);
    console.log("fetch: Meeting_list");
    return response;
}

export const fetchKokkaiSpeech = async (options: KokkaiQueryOptions) => {
    const url = generateFetchUrl("speech", options);
    const response = await fetch(url);
    console.log("fetch: Speech");
    return response;
}