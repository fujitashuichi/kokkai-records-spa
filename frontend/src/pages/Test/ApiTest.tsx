import { useEffect } from "react";
import MeetingsBoundary from "../../Kokkai/Meeting/Boundaries/MeetingsBoundary";
import SpeechesBoundary from "../../Kokkai/Speech/Boundaries/SpeechesBoundary";
import MeetingList from "./MeetingList";
import SpeechesList from "./SpeechesList";
import { generateFetchUrl } from "../../Kokkai/Common/Searcher/generateFetchUrl";


function ApiTest() {
    useEffect(() => {
        const test = async () => {
            // generateFetchUrl のテスト
            const res = await fetch(generateFetchUrl("meeting_list", {}));
            if (!res.ok) {
                console.error("generateFetchUrl failed");
            } else {
                console.log("generateFetchUrl succeed");
            }
        }
        test();
    }, []);


    return (
        <>
            <MeetingsBoundary>
                <h2>Meeting検索のテスト</h2>
                <MeetingList />
            </MeetingsBoundary>
            <SpeechesBoundary>
                <h2>Speech検索のテスト</h2>
                <SpeechesList />
            </SpeechesBoundary>
        </>
    )
}


export default ApiTest
