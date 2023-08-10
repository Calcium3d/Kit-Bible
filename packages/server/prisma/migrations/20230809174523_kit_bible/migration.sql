-- CreateTable
CREATE TABLE "Kit" (
    "id" SERIAL NOT NULL,
    "kit_company" TEXT NOT NULL,
    "kit" TEXT NOT NULL,
    "car_company" TEXT NOT NULL,
    "car" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Kit_pkey" PRIMARY KEY ("id")
);
