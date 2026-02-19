import { Link } from "react-router-dom"
import { SearchContainer } from "../components/ui/search"

function HomePage() {
    return (
        <div className="max-w-2xl mx-auto py-10 px-4">
            <h1 className="text-center text-3xl font-bold mb-6">HomePage</h1>
            <h2 className="text-center text-xl font-semibold mb-4">
                <Link to="/test" className="underline text-blue-600 hover:text-blue-800 transition">TestPage</Link>
            </h2>
            <SearchContainer />
        </div>
    )
}

export default HomePage