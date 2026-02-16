import MeetingsBoundary from "../../Kokkai/Meeting/Boundaries/MeetingsBoundary";
import SpeechesBoundary from "../../Kokkai/Speech/Boundaries/SpeechesBoundary";
import MeetingList from "./MeetingList";


function ApiTest() {

    return (
        <>
            <MeetingsBoundary>
                <h2>Meeting検索のテスト</h2>
                <MeetingList />
            </MeetingsBoundary>
            <SpeechesBoundary>
                <h2>Speech検索のテスト</h2>
            </SpeechesBoundary>
        </>
    )
}


export default ApiTest
