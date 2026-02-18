import { useEffect } from 'react';
import { useSearchSpeeches } from '../../Kokkai/Speech/Providers/SpeechContext';
import { SpeechesSearchResult } from '../../components/ui/search/result';

const isTesting = true;

function SpeechesList() {
    const search = useSearchSpeeches();

    useEffect(() => {
        search("speech", {maximumRecords: 1});
    }, []);

    return (
        <>
            {isTesting ? (
                <SpeechesSearchResult />
            ) : (
                <p>SpeechesList Test disabled</p>
            )}
        </>
    )
}

export default SpeechesList
