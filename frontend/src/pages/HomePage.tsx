import { Link } from "react-router-dom"
import { SearchContainer } from "../components/ui/search"

function HomePage() {
    return (
        <div>
            <h1 className=" text-center">HomePage</h1>
            <h2 className=" text-center">
                <Link to="/test">TestPage</Link>
            </h2>
            <SearchContainer />
        </div>
    )
}

export default HomePage
