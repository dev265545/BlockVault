import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      CNR_Number,
      textfile,
      judgeid,
      aadharid,
      lawyerid,
      DocLink,
      contract,
    } = req.body;

    try {
      console.log(contract);
      const newCourtCase = await prisma.courtCase.create({
        data: {
          CNR_Number,

          DocLink,
        },
      });

      res.status(201).json({ success: true, data: newCourtCase });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
