import React, { useState } from "react";
import type { KokkaiQueryOptions, searchType } from "../../../../Kokkai/Common/types";
import { useSearch } from "../../../../Kokkai/Common/Providers/useSearch";
import { AppButton } from "../../common/AppButton";

type Query = KokkaiQueryOptions;

type Props = {
    searchTypeState: [
        searchType,
        React.Dispatch<React.SetStateAction<searchType>>
    ]
}

function SearchForm({ searchTypeState }: Props) {
    const [searchType, setSearchType] = searchTypeState;

    // メイン: 検索語・会議名・発言者・日付
    const [any, setAny] = useState<Query["any"]>(undefined);
    const [nameOfMeeting, setNameOfMeeting] = useState<Query["nameOfMeeting"]>(undefined);
    const [speaker, setSpeaker] = useState<Query["speaker"]>(undefined);
    const [from, setFrom] = useState<Query["from"]>(undefined);
    const [until, setUntil] = useState<Query["until"]>(undefined);

    const searchHook = useSearch();

    const search = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const options = {
            any: any,
            nameOfMeeting: nameOfMeeting,
            speaker: speaker,
            from: from,
            until: until
        };
        searchHook(searchType, options);
    }


    const normalizedString = (string: string) => {
        // 正常でないSpace入力を正規の入力に置換します
        return (
            string
                .replace(/\u3000/g, " ")
                .trim()
                .replace(/\s+/g, " ")
        );
    }

    return (
        <div>
            <form>
                <div className=" flex">
                    <label htmlFor="searchType">検索タイプ</label>
                    <select id="searchType" value={searchType} onChange={(e) => setSearchType(e.target.value as searchType)}>
                        <option value="meeting_list">会議単位簡易</option>
                        <option value="meeting">会議単位</option>
                        <option value="speech">発言単位</option>
                    </select>
                </div>

                <div className=" flex">
                    <label htmlFor="any">単語で検索（スペースはAND検索）</label>
                    <input id="any" type="text"
                        value={any ?? ""}
                        onChange={(e) => setAny(normalizedString(e.target.value))}
                    />
                </div>

                <div className=" flex">
                    <label htmlFor="nameOfMeeting">会議名（スペースはOR検索）</label>
                    <input id="nameOfMeeting" type="text"
                        value={nameOfMeeting ?? ""}
                        onChange={(e) => setNameOfMeeting(normalizedString(e.target.value))}
                    />
                </div>

                <div className=" flex">
                    <label htmlFor="speaker">発言者名（スペースはOR検索）</label>
                    <input id="speaker" type="text"
                        value={speaker ?? ""}
                        onChange={(e) => setSpeaker(normalizedString(e.target.value))}
                    />
                </div>

                <div className=" flex">
                    <label htmlFor="from">日付（いつから）</label>
                    <input id="from" type="date"
                        value={from ?? ""}
                        onChange={(e) => setFrom(e.target.value)}
                    />
                </div>

                <div className=" flex">
                    <label htmlFor="until">日付（いつまで）</label>
                    <input id="until" type="date"
                        value={until ?? ""}
                        onChange={(e) => setUntil(e.target.value)}
                    />
                </div>

                <AppButton variant="primary" className=" w-16 h-12" type="button" onClick={(e) => search(e)}>検索</AppButton>
            </form>
        </div>
    )
}

export default SearchForm
