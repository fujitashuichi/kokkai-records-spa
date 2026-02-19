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
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <form>
                <div className="flex items-center gap-3 mb-4">
                    <label htmlFor="searchType" className="w-32 font-medium">検索タイプ</label>
                    <select id="searchType" value={searchType} onChange={(e) => setSearchType(e.target.value as searchType)}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                    >
                        <option value="meeting_list">会議単位簡易</option>
                        <option value="meeting">会議単位</option>
                        <option value="speech">発言単位</option>
                    </select>
                </div>

                <div className="flex items-center gap-3 mb-4">
                    <label htmlFor="any" className="w-32 font-medium">単語で検索（AND）</label>
                    <input id="any" type="text"
                        value={any ?? ""}
                        onChange={(e) => setAny(normalizedString(e.target.value))}
                        className="border border-gray-300 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="検索キーワード"
                    />
                </div>

                <div className="flex items-center gap-3 mb-4">
                    <label htmlFor="nameOfMeeting" className="w-32 font-medium">会議名（OR）</label>
                    <input id="nameOfMeeting" type="text"
                        value={nameOfMeeting ?? ""}
                        onChange={(e) => setNameOfMeeting(normalizedString(e.target.value))}
                        className="border border-gray-300 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="会議名を入力"
                    />
                </div>

                <div className="flex items-center gap-3 mb-4">
                    <label htmlFor="speaker" className="w-32 font-medium">発言者名（OR）</label>
                    <input id="speaker" type="text"
                        value={speaker ?? ""}
                        onChange={(e) => setSpeaker(normalizedString(e.target.value))}
                        className="border border-gray-300 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="発言者名を入力"
                    />
                </div>

                <div className="flex items-center gap-3 mb-4">
                    <label htmlFor="from" className="w-32 font-medium">日付（いつから）</label>
                    <input id="from" type="date"
                        value={from ?? ""}
                        onChange={(e) => setFrom(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <label htmlFor="until" className="w-32 font-medium">日付（いつまで）</label>
                    <input id="until" type="date"
                        value={until ?? ""}
                        onChange={(e) => setUntil(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <AppButton variant="primary" className="w-32 h-12 text-lg font-semibold px-4 py-2" type="button" onClick={(e) => search(e)}>
                    検索
                </AppButton>
            </form>
        </div>
    )
}

export default SearchForm