import React, { useEffect, useState } from 'react'
import type { KokkaiApiContext, MeetingsJson } from '../../Common/types';
import { ApiAdaptor } from '../../Common/Api';
import { MeetingsContext } from './MeetingContext';
import type { ApiResultWithStatus } from '../../Common/types/types.result';


export const MeetingsProvider = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = useState<KokkaiApiContext<MeetingsJson>>({ status: "idle" });

    const apiAdaptor = ApiAdaptor();

    useEffect(() => {
        setValue({ status: "loading" });
        const load =  async () => {
            const data: ApiResultWithStatus<MeetingsJson> = await apiAdaptor.getMeetings();
            setValue(data);
            // ここで status = "error" | "success" が決まる
        };
        load();
    }, []);

    return (
        <MeetingsContext.Provider value={value}>{children}</MeetingsContext.Provider>
    )
}
