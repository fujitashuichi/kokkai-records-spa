import { useEffect } from 'react';

const isTesting = true;

function MeetingList() {
    const search = useSearchMeetings();

    useEffect(() => {
        search("meeting_list", {maximumRecords: 1});
    }, []);

    return (
        <>
            {isTesting ? (
                <MeetingsSearchResult />
            ) : (
                <p>MeetingList Test disabled</p>
            )}
        </>
    )
}

export default MeetingList
