interface ElementCountProps{
    length: number,
    tasksDone: number
}

export default function TopComponent({length, tasksDone}: ElementCountProps){
    const percentage = length > 0 ? (tasksDone / length) * 100 : 0;
    const circumference = 2 * Math.PI * 28;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
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
                    <div className="relative w-16 h-16">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="6" />
                            <circle
                                cx="32"
                                cy="32"
                                r="28"
                                fill="none"
                                stroke="white"
                                strokeWidth="6"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                className="transition-all duration-1000"
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold">{Math.round(percentage)}%</span>
                    </div>
                    <div className="text-xl font-medium">
                        {tasksDone} of {length} habits
                        <br />
                        completed today!
                    </div>
                </div>
            </div>
        </>
    )
}