import MeetingsBoundary from "../../../../Kokkai/Meeting/Boundaries/MeetingsBoundary";
import { MeetingSearchResultUI } from "./MeetingsSearchResultUI";

export function MeetingsSearchResult() {
    return (
        <MeetingsBoundary>
            <MeetingSearchResultUI />
        </MeetingsBoundary>
    )
}