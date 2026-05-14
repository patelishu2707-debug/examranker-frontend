"use client";

import { useEffect, useState } from "react";
import API from "@/services/api";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchBackend = async () => {
      try {
        const res = await API.get("/");
        setMessage(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBackend();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">{message}</h1>
    </div>
  );
}