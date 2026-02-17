import { useEffect } from 'react';
import { useSearchMeetings } from '../../Kokkai/Meeting/Providers/MeetingContext';
import { MeetingsSearchResult } from '../../components/ui/search/result';

const isTesting = true;

function MeetingList() {
    const search = useSearchMeetings();

    useEffect(() => {
        search("meeting_list", {});
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
