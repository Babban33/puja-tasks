"use client"
import { MoreVertical, Plus } from "lucide-react";
import TopComponent from "./TopComponent";
import { useState } from "react";

export default function TaskOne(){
    const[ isPopUpOpen, setPopUpOpen] = useState(false);
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
                    onClick={()=>setPopUpOpen(true)}
                >
                    <Plus className="size-9 text-white" />
                </button>
            </div>

            {isPopUpOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white w-80 rounded-lg p-6 shadow-lg relative">
                        <h2 className="text-lg font-semibold mb-4">Create Habit</h2>
                        <button onClick={()=>setPopUpOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}