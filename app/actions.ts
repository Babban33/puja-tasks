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

export async function toggleHabit(id: string, checked: boolean) {
    await prisma.habit.update({
      where: { id },
      data: { checked: !checked },
    });
    revalidatePath("/taskone");
}

export async function deleteHabit(id:string) {
    await prisma.habit.delete({
        where:{id},
    });
    revalidatePath("/taskone");
}