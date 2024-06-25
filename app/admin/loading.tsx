import { Loader2 } from "lucide-react";
import React from "react";

export default function AdminLoading() {
  return (
    <div className="flex justify-center">
      <Loader2 className="size-24 animate-spin" />
    </div>
  );
}

// im still not sure how or why this works just by creating this page. i didnt import it anywhere yet it works
