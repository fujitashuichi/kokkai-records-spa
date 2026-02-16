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
                            <p>{record.speaker}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SpeechesList
