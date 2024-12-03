"use client";
import { CopyIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type url = {
  id: string;
  ogurl: string;
  shorten: string;
  visits: number;
};
const List = () => {
  const [urls, seturls] = useState<url[]>([]);
  const geturls = async () => {
    try {
      const res = await fetch("/api/urls");
      const data = await res.json();
      seturls(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    geturls();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold text-left my-3">Recent URLs</h1>
      <div className="flex flex-col gap-2">
        {urls.map((url) => (
          <div key={url.id} className="flex justify-between items-center">
            <div>
              <Link href={url.ogurl} target="_blank" className="text-blue-500">
                {`https://shortener/${url.shorten}`}
              </Link>
            </div>

            <div className="flex gap-4">
              <CopyIcon className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
