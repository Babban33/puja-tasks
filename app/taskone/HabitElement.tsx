"use client";
import { MoreVertical, Trash2 } from "lucide-react";
import { toggleHabit, deleteHabit } from "../actions";
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger, PopoverArrow } from "@radix-ui/react-popover";

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
                <Popover>
                    <PopoverTrigger>
                        <MoreVertical className="size-4 cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className="relative right-1 bg-background mt-2 text-red-500 hover:bg-red-100 border rounded-lg shadow-lg z-10 p-4">
                        <PopoverArrow />
                        <button
                            className="w-full text-left flex gap-2 items-center"
                            onClick={()=>deleteHabit(id)}
                        >
                            <Trash2 className="size-4"/>
                            Delete
                        </button>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}