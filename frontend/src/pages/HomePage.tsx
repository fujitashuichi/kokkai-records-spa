import { SearchContainer } from "../components/ui/search"

function HomePage() {
    return (
        <div className="max-w-2xl mx-auto py-10 px-4">
            <h1 className="text-center text-3xl font-bold mb-6">HomePage</h1>
            <SearchContainer />
        </div>
    )
}

export default HomePage