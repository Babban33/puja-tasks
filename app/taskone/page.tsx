import { MoreVertical, Plus } from "lucide-react";
import TopComponent from "./TopComponent";

export default function TaskOne(){
    return(
        <div className="max-w-md mx-auto p-4 min-h-screen bg-gray-50 text-gray-900 flex flex-col">
            <TopComponent/>
            <div className="mb-4 px-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Today Habit</h2>
                <button className="text-orange-500 text-sm hover:text-orange-600 transition-colors">See all</button>
            </div>

            <div className="space-y-2 px-2">
                <div className="flex justify-between bg-gray-200 p-4 items-center rounded-lg">
                    <span>Meditating</span>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox size-5 text-emerald-400 rounded-md border-2 border-emerald-400 focus:ring-emerald-400"/>
                        <MoreVertical className="size-4"/>
                    </div>
                </div>
                <div className="flex justify-between bg-gray-200 p-4 items-center rounded-lg">
                    <span>Read Philosophy</span>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox size-5 text-emerald-400 rounded-md border-2 border-emerald-400 focus:ring-emerald-400"/>
                        <MoreVertical className="size-4"/>
                    </div>
                </div>
                <div className="flex justify-between bg-gray-100 p-4 items-center rounded-lg">
                    <span>Journaling</span>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox size-5 text-emerald-400 rounded-md border-2 border-emerald-400 focus:ring-emerald-400"/>
                        <MoreVertical className="size-4"/>
                    </div>
                </div>
            </div>


            <div className="mt-auto flex justify-end">
                <button
                    className="size-14 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    aria-label="Add new habit"
                >
                    <Plus className="size-9 text-white" />
                </button>
            </div>
        </div>
    )
}