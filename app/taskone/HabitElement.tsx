"use client";
import { MoreVertical } from "lucide-react";
import { toggleHabit } from "../actions";

interface HabitProps{
    id: string,
    name: string,
    checked: boolean,
}

export default function HabitElement({id, name, checked}: HabitProps){
    const handleToggle = async () => {
        await toggleHabit(id, checked);
    };
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
                <MoreVertical className="size-4 cursor-pointer" />
            </div>
        </div>
    )
}