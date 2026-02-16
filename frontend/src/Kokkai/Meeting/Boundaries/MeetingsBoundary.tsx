import type React from 'react';
import { useMeetingsCtx } from '../Providers/MeetingContext'

function MeetingsBoundary({ children }: { children: React.ReactNode }) {
    const meetings = useMeetingsCtx();

    if (meetings.status === "idle" || meetings.status === "loading") {
        return <h1>Now Loading...</h1>
    }

    if (meetings.status === "error") {
        return (<section style={{ border: "1px solid red", padding: "20px" }}>
            <h1>Error</h1>
            <p>Data: Kokkai Meetings</p>
            <p>{String(meetings.error)}</p>
        </section>)
    }

    return <>{children}</>
}

export default MeetingsBoundary
