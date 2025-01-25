import prisma from "./prisma";
import TopComponent from "./TopComponent";
import HabitEle from "./HabitElement";
import FormWrapper from "./FormWrapper";

export default async function HabitPage() {
    const habits = await prisma.habit.findMany({
        orderBy:{
            checked: "desc",
        }
    });
    
    return(
        <div className="max-w-md mx-auto p-4 min-h-screen bg-gray-50 text-gray-900 flex flex-col">
            <TopComponent/>
            <div className="mb-4 px-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Today Habit</h2>
                <button className="text-orange-500 text-sm hover:text-orange-600 transition-colors">See all</button>
            </div>

            <div className="space-y-3 px-2">
                {habits.map((habit) =>(
                    <HabitEle key={habit.id} id={habit.id} name={habit.name} checked={habit.checked} />
                ))}
            </div>
            <FormWrapper/>
        </div>
    )
}