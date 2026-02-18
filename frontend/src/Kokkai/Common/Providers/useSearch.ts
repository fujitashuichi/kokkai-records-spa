import { useSearchMeetings } from "../../Meeting/Providers/MeetingContext";
import { useSearchSpeeches } from "../../Speech/Providers/SpeechContext";
import type { KokkaiQueryOptions, searchType } from "../types";

export const useSearch = () => {
    const searchMeetings = useSearchMeetings();
    const searchSpeeches = useSearchSpeeches();

    const search = (searchType: searchType, options: KokkaiQueryOptions) => {
        switch (searchType) {
            case "meeting":
                return searchMeetings(searchType, options);
            case "meeting_list":
                return searchMeetings(searchType, options);
            case "speech":
                return searchSpeeches(searchType, options);
        }
    }

    return search;
}