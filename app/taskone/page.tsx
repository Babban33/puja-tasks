"use client"
import { Plus } from "lucide-react";
import TopComponent from "./TopComponent";
import { useTaskStore } from "./useTaskStore";
import HabitElement from "./HabitElement";

export default function TaskOne(){
    const {habits, isPopUpOpen, togglePopUp, addHabit} = useTaskStore();
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const inputElement = document.getElementById("habit") as HTMLInputElement;
        const newHabitName = inputElement?.value.trim();
        if (newHabitName) {
            addHabit(newHabitName);
            inputElement.value = "";
            togglePopUp();
        }
    };
    return(
        <div className="max-w-md mx-auto p-4 min-h-screen bg-gray-50 text-gray-900 flex flex-col">
            <TopComponent/>
            <div className="mb-4 px-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Today Habit</h2>
                <button className="text-orange-500 text-sm hover:text-orange-600 transition-colors">See all</button>
            </div>

            <div className="space-y-2 px-2">
                {habits.map((habit, index)=>(
                    <HabitElement key={index} name={habit.name} checked={habit.checked}/>
                ))}
            </div>


            <div className="mt-auto flex justify-end">
                <button
                    className="size-14 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    aria-label="Add new habit"
                    onClick={togglePopUp}
                >
                    <Plus className="size-9 text-white" />
                </button>
            </div>

            {isPopUpOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white w-80 rounded-lg p-6 shadow-lg relative">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Create Habit</h2>
                            <button onClick={togglePopUp}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form className="space-y-4" onSubmit={handleFormSubmit}>
                            <div>
                                <label htmlFor="habit" className="block text-gray-700">
                                Habit Name
                                </label>
                                <input
                                    type="text"
                                    id="habit"
                                    name="habit"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 text-white rounded-md bg-gradient-to-br from-orange-500 to-orange-400"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}


