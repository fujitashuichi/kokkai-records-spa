import React, { useEffect, useState } from 'react'
import type { KokkaiApiContext, SpeechesJson, ValidatedApiResponse } from '../../Common/types';
import { ApiAdaptor } from '../../Common/Api';
import { SpeechesContext } from './SpeechContext';


export const SpeechesProvider = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = useState<KokkaiApiContext<SpeechesJson>>({ status: "idle" });

    const apiAdaptor = ApiAdaptor();

    useEffect(() => {
        setValue({ status: "loading" });
        const load =  async () => {
            const data: ValidatedApiResponse<SpeechesJson> = await apiAdaptor.getSpeeches();
            setValue(data);
            // ここで status = "error" | "success" が決まる
        };
        load();
    }, []);

    return (
        <SpeechesContext.Provider value={value}>{children}</SpeechesContext.Provider>
    )
}
