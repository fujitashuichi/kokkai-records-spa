import { useSpeeches } from "../../../../Kokkai/Speech/Providers/SpeechContext";

export function SpeechesResultUI() {
    const speeches = useSpeeches();

    return (
        <div>
            {speeches.speechRecord.map(record => {
                return (
                    <div key={record.speechID}>
                        <p>{record.date}</p>
                        <div>
                            <p>{record.speaker}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
