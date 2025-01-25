"use client";
import { MoreVertical } from "lucide-react";
import { toggleHabit, deleteHabit } from "../actions";
import { useState } from "react";

interface HabitProps{
    id: string,
    name: string,
    checked: boolean,
}

export default function HabitElement({id, name, checked}: HabitProps){
    const handleToggle = async () => {
        await toggleHabit(id, checked);
    };
    const handleDelete = async () => {
        await deleteHabit(id);
        setShowOptions(false);
    }
    const [showOptions, setShowOptions] = useState(false);
    return(
        <div className={`flex justify-between ${checked ? "bg-gray-200" : "bg-gray-100"} p-4 items-center rounded-lg`}>
            <span className={checked ? "text-green-500" : ""}>{name}</span>
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className="form-checkbox size-6 text-emerald-400 rounded-md border-2 border-gray-400 focus:ring-0 cursor-pointer"
                    checked={checked}
                    onChange={handleToggle}
                />
                <MoreVertical className="size-4 cursor-pointer" onClick={() => setShowOptions(!showOptions)} />
                {showOptions && (
                    <div className="relative right-0 mt-2 bg-white border rounded-lg shadow-lg z-10">
                        <button
                            className="px-4 py-2 text-red-500 hover:bg-red-100 w-full text-left"
                            onClick={() => handleDelete()}
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}