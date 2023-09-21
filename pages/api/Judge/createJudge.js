import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Name, Email, JudgeId, Password, PhoneNo, AadhaarId } = req.body;

    try {
      const newJudge = await prisma.Judge.create({
        data: {
          Name,
          Email,

          JudgeId,
          Password,
          PhoneNo,
          AadhaarId,
        },
      });

      res.status(200).json(newJudge);
    } catch (error) {
      res.status(500).json({ error: "Error creating judge" + error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
