import { useSpeeches } from '../../Kokkai/Speech/Providers/SpeechContext';

const isTesting = false;

function SpeechesList() {
    const speeches = useSpeeches();

    return (
        <div>
            {isTesting ? (
                    speeches.speechRecord.map(record => {
                        return (
                            <div key={record.speechID}>
                                <p>{record.date}</p>
                                <div>
                                    <p>{record.speaker}</p>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <p>FetchSpeeches Test disabled</p>
                )
            }
        </div>
    )
}

export default SpeechesList
