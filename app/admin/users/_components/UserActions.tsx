"use client";

import { DropdownMenuItem } from "@/app/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { startTransition, useTransition } from "react";
import { deleteUser } from "../../_actions/users";

export function DeleteDropdownItem({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      variant="destructive"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await deleteUser(id);
          router.refresh();
        })
      }
    >
      defaultChecked
    </DropdownMenuItem>
  );
}
