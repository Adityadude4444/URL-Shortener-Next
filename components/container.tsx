"use client";
import React, { useState } from "react";
import List from "@/components/list";
import Shortener from "@/components/shortener";
const Container = () => {
  const [loading, setloading] = useState(0);
  const handleurl = () => {
    setloading((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col text-center gap-3 w-full">
        <h1 className="text-4xl font-bold">URL Shortener</h1>
        <p className="mb-10">Get a simple URL</p>

        <Shortener handleurl={handleurl} />
        <List key={loading} />
      </div>
    </div>
  );
};

export default Container;
