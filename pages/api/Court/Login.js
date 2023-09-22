import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Id, Password } = req.body;

    try {
      const user = await prisma.Court.findUnique({
        where: {
          Id,
        },
      });

      if (user && user.Password === Password) {
        // Successful login
        res.status(200).json({
          message: "Login successful",
          Court: {
            id: user.Id,

            // Include other fields as needed
          },
        });
      } else {
        // Invalid credentials
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" + error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
