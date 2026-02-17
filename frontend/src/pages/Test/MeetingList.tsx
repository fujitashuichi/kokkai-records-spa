import { useMeetings } from '../../Kokkai/Meeting/Providers/MeetingContext';

const isTesting = false;

function MeetingList() {
    const meetings = useMeetings();

    return (
        <div>
            {isTesting ? (
                    meetings.meetingRecord.map(record => {
                        return (
                            <div key={record.issueID}>
                                <p>{record.date}</p>
                                <div>
                                    {record.speechRecord.map(speech => {
                                        return (
                                            <div key={speech.speechID}>
                                                <strong>{speech.speaker}</strong>
                                                <p>{speech.speech}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <p>FetchMeeting Test disabled</p>
                )
            }
        </div>
    )
}

export default MeetingList
