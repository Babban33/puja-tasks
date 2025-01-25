"use client";

import { useHabitStore } from "./useHabitStore";
import { Plus } from "lucide-react";
import { addHabit } from "@/app/actions";

export default function FormWrapper() {
    const { isPopUpOpen, setState } = useHabitStore();

    const togglePopUp = () => setState((state) => ({ isPopUpOpen: !state.isPopUpOpen }));

    return (
        <>
            <div className="mt-auto flex justify-end">
                <button
                    onClick={togglePopUp}
                    className="size-14 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    aria-label="Add new habit"
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
                    <form className="space-y-4" action={addHabit}>
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
        </>
    );
}
