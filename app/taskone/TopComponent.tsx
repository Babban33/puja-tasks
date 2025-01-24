export default function TopComponent(){
    return(
        <>
            <header className="my-6">
                <div className="text-sm ">Sun, 1 March 2022</div>
                <h1 className="text-2xl font-semibold text-gray-900">
                Hello, <span className="text-orange-500">Susy!</span>
                </h1>
            </header>

            <div className="relative mb-8 p-6 bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-xl overflow-hidden shadow-md">
                <div className="flex items-center gap-4 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div className="text-xl font-medium">
                        2 of 3 habits
                        <br />
                        completed today!
                    </div>
                </div>
            </div>
        </>
    )
}