import React, { useMemo, useState } from 'react'
import type { KokkaiApiContext, MeetingsJson } from '../../Common/types';
import { ApiAdaptor } from '../../Common/Api';
import { MeetingsContext } from './MeetingContext';
import type { KokkaiQueryOptions, searchTypeMeeting } from '../../Common/types/types.query';

export const MeetingsProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<KokkaiApiContext<MeetingsJson>["data"]>({ status: "idle" });

    const adaptor = ApiAdaptor();

    const memorizedData = useMemo(() => data, [data]);

    const search = (searchType: searchTypeMeeting, options: KokkaiQueryOptions) => {
        setData({ status: "loading" });
        adaptor.getMeetings(searchType, options)
            .then(result => {
                setTimeout(() => setData(result), 500);
            })
            .catch(err => setData({ status: "error", error: err }));
    }

    return (
        <MeetingsContext.Provider value={{ data: memorizedData, search: search }}>{children}</MeetingsContext.Provider>
    )
}
