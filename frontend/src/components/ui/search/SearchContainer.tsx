import { useState } from "react"
import SearchForm from "./form/SearchForm"
import { MeetingsSearchResult, SpeechesSearchResult } from "./result"
import type { searchType } from "../../../Kokkai/Common/types"

export function SearchContainer() {
    const [searchType, setSearchType] = useState<searchType>("meeting_list")

    const activeResultMap = {
        meeting: MeetingsSearchResult,
        meeting_list: MeetingsSearchResult,
        speech: SpeechesSearchResult
    } as const;

    const ActiveResult = activeResultMap[searchType];

    return (
        <div className="space-y-8">
            <SearchForm searchTypeState={[searchType, setSearchType]} />
            <div className="bg-white rounded-xl shadow p-6 min-h-[200px]">
                <ActiveResult />
            </div>
        </div>
    )
}