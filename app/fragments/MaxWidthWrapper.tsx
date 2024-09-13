import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// Properties ---
type Props = {
  className?: string;
  children: ReactNode;
};

const MaxWidthWrapper = (props: Props) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-6",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default MaxWidthWrapper;
