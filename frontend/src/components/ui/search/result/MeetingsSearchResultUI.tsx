import { useMeetings } from "../../../../Kokkai/Meeting/Providers/MeetingContext";

export function MeetingSearchResultUI() {
    const meetings = useMeetings();

    return (
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
    )
}