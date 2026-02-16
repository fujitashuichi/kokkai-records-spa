import { useEffect } from "react";
import { TestApiTypesValid } from "../../Kokkai/Common/sample/typeTest";
import MeetingsBoundary from "../../Kokkai/Meeting/Boundaries/MeetingsBoundary";
import SpeechesBoundary from "../../Kokkai/Speech/Boundaries/SpeechesBoundary";
import MeetingList from "./MeetingList";
import SpeechesList from "./SpeechesList";


function ApiTest() {
    useEffect(() => {
        const test = async () => {
            await TestApiTypesValid();
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
