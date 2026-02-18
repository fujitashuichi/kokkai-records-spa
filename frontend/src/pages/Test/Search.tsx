import SearchForm from "../../components/ui/search/form/SearchForm"
import { MeetingsSearchResult, SpeechesSearchResult } from "../../components/ui/search/result"

function Search() {
    return (
        <div>
            <SearchForm />
            <MeetingsSearchResult />
            <SpeechesSearchResult />
        </div>
    )
}

export default Search
