import React, { useEffect, useState } from 'react'
import { KokkaiApiContext } from './ApiContext'
import type { KokkaiApiProvider } from '../types/api/types.context';
import { ApiAdaptor } from '../api/Adaptor/ApiAdaptor';

function ApiProvider({ children }: { children: React.ReactNode }) {
    const [value, setValue] = useState<KokkaiApiProvider>({ status: "idle" });

    const [meetindgs, setMeetings] = useState({});
    const [speeches, setSpeeches] = useState({});

    const apiAdaptor = ApiAdaptor();

    useEffect(() => {
        setValue({ status: "loading" });
        setMeetings(apiAdaptor.getMeetings());
        setSpeeches(apiAdaptor.getSpeeches());
    }, []);

    setValue({

    })


    return (
        <KokkaiApiContext.Provider value={}>{children}</KokkaiApiContext.Provider>
    )
}

export default ApiProvider
