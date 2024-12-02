import { CopyIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const List = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-left my-3">Recent URLs</h1>
      <div className="flex justify-between items-center">
        <div>
          <Link href={"https://www.youtube.com/"} className="text-blue-500">
            youtube.com
          </Link>
        </div>

        <div className="flex gap-4">
          <CopyIcon className="w-4 h-4" />
          <EyeIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default List;
