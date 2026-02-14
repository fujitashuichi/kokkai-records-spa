import { KokkaiApiService } from "../api/Service/KokkaiApiService";

function ApiTest() {
    // Service層の検証
    const service = new KokkaiApiService();
    service.fetchMeetings();
    service.fetchSpeeches();

    return (
        <div>
            {

            }
        </div>
    )
}

export default ApiTest
