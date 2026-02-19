import { useMeetings } from "../../../../Kokkai/Meeting/Providers/MeetingContext";

export function MeetingSearchResultUI() {
    const meetings = useMeetings();

    return (
        <div className="space-y-8">
            {meetings.meetingRecord.map(record => {
                return (
                    <div key={record.issueID} className="border-b border-gray-200 pb-6 last:border-0">
                        <p className="text-gray-500 font-semibold text-sm mb-3">{record.date}</p>
                        <div className="mt-2 space-y-3">
                            {record.speechRecord.map(speech => {
                                return (
                                    <div key={speech.speechID} className="rounded-lg bg-gray-50 p-4 border border-gray-200 hover:bg-gray-100 transition">
                                        <strong className="text-blue-600 block mb-2">{speech.speaker}</strong>
                                        <p className="text-gray-800 leading-relaxed">{speech.speech}</p>
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