"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps, ReactNode } from "react";
import { cn } from "../../lib/utils";

export default function Nav({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primary text-primary-foreground flex justify-center px-4">
      {children}
    </div>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground no-underline ",
        pathname === props.href && "bg-background text-foreground"
      )}
    />
  );
}
