import React, { useMemo, useState } from 'react'
import type { KokkaiApiContext, SpeechesJson } from '../../Common/types';
import { ApiAdaptor } from '../../Common/Api';
import { SpeechesContext } from './SpeechContext';
import type { KokkaiQueryOptions, searchTypeSpeech } from '../../Common/Service/Searcher/types.query';


export const SpeechesProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<KokkaiApiContext<SpeechesJson>["data"]>({ status: "idle" });

    const adaptor = ApiAdaptor();

    const memorizedData = useMemo(() => data, [data]);

    // 互換性のために、明示的にsearchTypeを引数に持つ
    const search = (_searchType: searchTypeSpeech, options: KokkaiQueryOptions) => {
        setData({ status: "loading" });
        adaptor.getSpeeches(options)
            .then(result => {
                setTimeout(() => setData(result), 500);
            })
            .catch(err => setData({ status: "error", error: err }));
    }

    return (
        <SpeechesContext.Provider value={{ data: memorizedData, search: search }}>{children}</SpeechesContext.Provider>
    )
}
