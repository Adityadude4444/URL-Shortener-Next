"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Shortenprops {
  handleurl: () => void;
}

const Shortener = ({ handleurl }: Shortenprops) => {
  const [url, seturl] = useState<string>("");
  const onclick = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url.trim()) {
      console.error("URL cannot be empty");
      return;
    }

    try {
      const response = await fetch("/api/url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten the URL");
      }

      const data = await response.json();
      seturl("");
      handleurl();
    } catch (error) {
      console.error("Error creating shortened URL:", error);
    }
  };

  return (
    <form onSubmit={onclick}>
      <div className="flex flex-col gap-2 w-full">
        <Input
          type="url"
          value={url}
          placeholder="Enter URL"
          required
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <Button>Shorten</Button>
      </div>
    </form>
  );
};

export default Shortener;
