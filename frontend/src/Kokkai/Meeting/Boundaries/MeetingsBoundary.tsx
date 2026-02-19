import type React from 'react';
import { useMeetingsCtx } from '../Providers/MeetingContext'

function MeetingsBoundary({ children }: { children: React.ReactNode }) {
    const { data: meetings } = useMeetingsCtx();

    if (meetings.status === "idle") {
        return <h1>What would you like to research?</h1>
    }

    if (meetings.status === "loading") {
        return <h1>Now Loading...</h1>
    }

    if (meetings.status === "noResult") {
        return <h1>Sorry, No results found</h1>
    }

    if (meetings.status === "error") {
        return (
            <section style={{ border: "1px solid red", padding: "20px" }}>
                <h1>Error</h1>
                <p>Data: Kokkai Meetings</p>
                <p>{String(meetings.error)}</p>
            </section>
        )
    }

    return <>{children}</>
}

export default MeetingsBoundary
