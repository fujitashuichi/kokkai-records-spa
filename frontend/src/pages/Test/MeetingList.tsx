import { useMeetings } from '../../Kokkai/Meeting/Providers/MeetingContext';

function MeetingList() {
    const meetings = useMeetings();

    return (
        <div>
            {meetings.meetingRecord.map(record => {
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
            })}
        </div>
    )
}

export default MeetingList
