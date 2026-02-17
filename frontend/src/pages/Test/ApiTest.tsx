import { useEffect } from "react";
import MeetingsBoundary from "../../Kokkai/Meeting/Boundaries/MeetingsBoundary";
import SpeechesBoundary from "../../Kokkai/Speech/Boundaries/SpeechesBoundary";
import MeetingList from "./MeetingList";
import SpeechesList from "./SpeechesList";


function ApiTest() {
    useEffect(() => {
        const asyncFuncTest = async () => {
            return;
        }
        asyncFuncTest();
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
