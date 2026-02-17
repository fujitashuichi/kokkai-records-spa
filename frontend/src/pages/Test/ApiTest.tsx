import { useEffect } from "react";
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
            <section>
                <h2>Meeting検索のテスト</h2>
                <MeetingList />
            </section>
            <section>
                <h2>Speech検索のテスト</h2>
                <SpeechesList />
            </section>
        </>
    )
}


export default ApiTest
