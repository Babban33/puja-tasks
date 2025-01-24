import { MoreVertical } from "lucide-react";
import TopComponent from "./TopComponent";

export default function TaskOne(){
    return(
        <div className="max-w-md mx-auto p-4 min-h-screen bg-gray-50 text-gray-900">
            <TopComponent/>
            <div className="mb-4 px-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Today Habit</h2>
                <button className="text-orange-500 text-sm hover:text-orange-600 transition-colors">See all</button>
            </div>

            <div className="flex justify-between bg-gray-200 p-4 items-center rounded-lg">
                <span>Meditating</span>
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox size-5 text-emerald-400 rounded-md border-2 border-emerald-400 focus:ring-emerald-400"/>
                    <MoreVertical className="size-5"/>
                </div>
            </div>
            <div className="flex justify-between bg-gray-200 p-4 items-center rounded-lg">
                <span>Meditating</span>
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox size-5 text-emerald-400 rounded-md border-2 border-emerald-400 focus:ring-emerald-400"/>
                    <MoreVertical className="size-5"/>
                </div>
            </div>
        </div>
    )
}