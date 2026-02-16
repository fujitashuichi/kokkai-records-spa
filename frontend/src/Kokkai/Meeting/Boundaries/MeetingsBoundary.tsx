import type React from 'react';
import { useMeetingsCtx } from '../Providers/MeetingContext'

function MeetingsBoundary({ children }: { children: React.ReactNode }) {
    const meetings = useMeetingsCtx();

    if (meetings.status === "idle" || meetings.status === "loading") {
        return <h1>Now Loading...</h1>
    }

    if (meetings.status === "error") {
        return (<>
            <h1>Error</h1>
            <p>{String(meetings.error)}</p>
        </>)
    }

    return <>{children}</>
}

export default MeetingsBoundary
