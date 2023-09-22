// pages/api/upload.js

import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { cnrNumber, fileintext } = req.body;

    try {
      const uploadedCase = await prisma.case.create({
        data: {
          cnrNumber,
          // Add other fields here as needed
        },
      });

      res
        .status(200)
        .json({ message: "Case uploaded successfully", data: uploadedCase });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
