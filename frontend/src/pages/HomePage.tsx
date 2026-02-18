import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div>
            <h1 className=" text-center">HomePage</h1>
            <Link to="/test">TestPage</Link>
        </div>
    )
}

export default HomePage
