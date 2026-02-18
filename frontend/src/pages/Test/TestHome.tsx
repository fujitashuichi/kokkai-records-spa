import { Link, Route, Routes } from "react-router-dom"
import ApiTest from "./ApiTest"
import Search from "./Search"

function TestHome() {
    return (
        <div>
            <div className=" text-center">
                <h3>
                    <Link to="/test/api">Test: use API</Link>
                </h3>
                <h3>
                    <Link to="/test/searchForm">Test: SearchForm Component</Link>
                </h3>
                <h3>
                    <Link to="/test/useSearchForm">Test: Use SearchForm in other Component</Link>
                </h3>
            </div>

            <Routes>
                <Route path="" element={
                    <h1 className=" text-center">What would you like to test?</h1>
                } />

                <Route path='api' element={
                    <ApiTest />
                } />

                <Route path='useSearchForm' element={
                    <Search />
                } />
            </Routes>
        </div>
    )
}

export default TestHome
