import { addHabit } from "@/app/actions";
import prisma from "./prisma";
import TopComponent from "./TopComponent";
import HabitEle from "./HabitElement";

export default async function HabitPage() {
    const habits = await prisma.habit.findMany();
    
    return(
        <div className="max-w-md mx-auto p-4 min-h-screen bg-gray-50 text-gray-900 flex flex-col">
            <TopComponent/>
            <div className="mb-4 px-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Today Habit</h2>
                <button className="text-orange-500 text-sm hover:text-orange-600 transition-colors">See all</button>
            </div>

            <div className="space-y-3 px-2">
                {habits.map((habit) =>(
                    <HabitEle key={habit.id} name={habit.name} checked={habit.checked} />
                ))}
            </div>

            <form action={addHabit} className="space-y-4">
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
    )
}