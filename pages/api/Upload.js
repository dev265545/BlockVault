export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    const formData = new FormData();
    formData.append("file", req.body);
    print(formData);

    const response = await fetch("http://127.0.0.1:8000/encrypt/", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error encrypting file");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "Error uploading file" });
  }
}
