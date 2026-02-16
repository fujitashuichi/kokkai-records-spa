import { useSpeeches } from '../../Kokkai/Speech/Providers/SpeechContext';

function SpeechesList() {
    const speeches = useSpeeches();

    return (
        <div>
            {speeches.speechRecord.map(record => {
                return (
                    <div key={record.issueID}>
                        <p>{record.date}</p>
                        <div>
                            return (
                                <div key={record.speechID}>
                                    <strong>{record.speaker}</strong>
                                    <p>{record.speech}</p>
                                </div>
                            )
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SpeechesList
