import { useSpeechesCtx } from '../Providers/SpeechContext'

function SpeechesBoundary({ children }: { children: React.ReactNode }) {
    const speeches = useSpeechesCtx();

    if (speeches.status === "idle" || speeches.status === "loading") {
        return <h1>Now Loading...</h1>
    }

    if (speeches.status === "error") {
        return (
            <>
                <h1>Error</h1>
                <p>{String(speeches.error)}</p>
            </>
        )
    }

    return <>{children}</>
}

export default SpeechesBoundary
