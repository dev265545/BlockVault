import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      CNR_Number,
      CaseType,
      FilingNumber,
      FilingDate,
      RegistrationNumber,
      RegistrationDate,
      PetitionersAndAdvocates,
      RespondentAndAdvocates,
      UnderActs,
      UnderSection,
      FirstHearingDate,
      CourtName,
      CourtID,
      NextHearingDate,
      StageOfCase,
      MainCaseNo,
      HistoryofCaseHearing,
      LastHearingDate,
      CaseName,
    } = req.body;

    try {
      const newCourtCase = await prisma.courtCase.create({
        data: {
          CNR_Number,
          CaseType,
          FilingNumber,
          FilingDate: new Date(FilingDate),
          RegistrationNumber,
          RegistrationDate: new Date(RegistrationDate),
          PetitionersAndAdvocates,
          RespondentAndAdvocates,
          UnderActs,
          UnderSection,
          FirstHearingDate: new Date(FirstHearingDate),
          CourtName,
          CourtID,
          NextHearingDate: new Date(NextHearingDate),
          StageOfCase,
          MainCaseNo,
          HistoryofCaseHearing: HistoryofCaseHearing,
          LastHearingDate: new Date(LastHearingDate),
          CaseName,
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
