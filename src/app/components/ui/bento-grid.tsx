import type { ReactNode } from "react";
import { cn } from "@/app/components/utils/lib";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid gap-4 px-4 sm:px-6 lg:px-8",
        "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        "auto-rows-[minmax(200px,_1fr)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento flex flex-col justify-between rounded-xl border bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        "min-h-[16rem]",
        className
      )}
    >
      <div className="mb-2">{header}</div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon && <div className="mb-1">{icon}</div>}
        {title && (
          <div className="mb-2 font-sans text-base font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
        )}
        {description && (
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
