-- CreateTable
CREATE TABLE "Habit" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("id")
);
