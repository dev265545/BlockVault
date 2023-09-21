import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req, res) {
  const Id = req.query.Id; // Retrieve the ID from the URL query

  try {
    const data = await prisma.Judge.findUnique({
      where: {
        Id: Id,
      },
    });

    if (data) {
      res.status(200).json({
        judge: {
          Id: data.Id,
          Name: data.Name, // Assuming these are your field names
          Email: data.Email,
          PhoneNo: data.PhoneNo,
          JudgeId: data.JudgeId,
          UpdatedAt: data.UpdatedAt,
          CreatedAt: data.CreatedAt,
          AadhaarId: data.AadhaarId,
        },

        // Include other fields as needed
      });
    } else {
      res.status(404).json({ message: `No data found for ID ${Id}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" + error });
  }
}
