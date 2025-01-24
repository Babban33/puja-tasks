import { MoreVertical } from "lucide-react";
interface HabitProps{
    name: string,
    checked: boolean,
}

export default function HabitElement({name, checked=false}: HabitProps) {
    return(
        <div className="flex justify-between bg-gray-200 p-4 items-center rounded-lg">
            <span>{name}</span>
            <div className="flex items-center gap-2">
                <input 
                    type="checkbox"
                    className="form-checkbox size-5 text-emerald-400 rounded-md border-2 border-emerald-400 focus:ring-emerald-400"
                    defaultChecked={checked}
                />
                <MoreVertical className="size-4" />
            </div>
        </div>
    );
}