import type React from 'react';
import { useSpeechesCtx } from '../Providers/SpeechContext'

function SpeechesBoundary({ children }: { children: React.ReactNode }) {
    const { data: speeches } = useSpeechesCtx();

    if (speeches.status === "idle") {
        return <h1>What would you like to research?</h1>
    }

    if (speeches.status === "loading") {
        return <h1>Now Loading...</h1>
    }

    if (speeches.status === "error") {
        return (
            <section style={{ border: "1px solid red", padding: "20px" }}>
                <h1>Error</h1>
                <p>Data: Kokkai Speeches</p>
                <p>{String(speeches.error)}</p>
            </section>
        )
    }

    return <>{children}</>
}

export default SpeechesBoundary
