import { useSpeeches } from "../../../../Kokkai/Speech/Providers/SpeechContext";

export function SpeechesResultUI() {
    const speeches = useSpeeches();

    return (
        <div className="space-y-6">
            {speeches.speechRecord.map(record => {
                return (
                    <div key={record.speechID} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition">
                        <p className="text-gray-500 font-semibold text-sm mb-2">{record.date}</p>
                        <p className="text-blue-700 font-medium">{record.speaker}</p>
                    </div>
                )
            })}
        </div>
    )
}