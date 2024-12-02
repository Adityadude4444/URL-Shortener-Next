"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Shortener = () => {
  const [url, seturl] = useState<string>("");
  const onclick = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(url);
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
