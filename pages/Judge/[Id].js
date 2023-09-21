"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function JudgeDashboard() {
  const [data, setData] = useState(null);
  const router = useRouter();

  const { Id } = router.query;
  console.log(router.query);

  useEffect(() => {
    fetch(`/api/Judge/${Id}`)
      .then((response) => response.json())
      .then((data) => setData(data.judge))
      .catch((error) => console.error("Error:", error));
  }, [Id]);

  console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  }
  return <div>{data.Name}</div>;
}

export default JudgeDashboard;
