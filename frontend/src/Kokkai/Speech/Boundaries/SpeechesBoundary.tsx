import { useSpeechesCtx } from '../Providers/SpeechContext'

function SpeechesBoundary({ children }: { children: React.ReactNode }) {
    const speeches = useSpeechesCtx();

    if (speeches.status === "idle" || speeches.status === "loading") {
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
