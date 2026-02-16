import { MeetingsProvider } from "../../Meeting/Providers"
import { SpeechesProvider } from "../../Speech/Providers"

export const KokkaiProvider = ({ children }: { children: React.ReactNode }) => {

    return (
        <MeetingsProvider>
            <SpeechesProvider>
                {children}
            </SpeechesProvider>
        </MeetingsProvider>
    )
}