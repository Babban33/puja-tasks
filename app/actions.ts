"use server"

import prisma from "@/app/taskone/prisma"
import { revalidatePath } from "next/cache"

export async function addHabit(formData: FormData) {
    await prisma.habit.create({
        data:{
            name: formData.get("habit") as string,
            checked: false
        }
    });
    revalidatePath("/taskone/correct")
}