import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
          "animate-marquee-vertical": vertical && !reverse,
          "animate-marquee-vertical-reverse": vertical && reverse,
        },
        className,
      )}
    >
      <div
        className={cn("flex shrink-0 justify-around gap-[var(--gap)]", {
          "flex-row": !vertical,
          "flex-col": vertical,
          "group-hover:[animation-play-state:paused]": pauseOnHover,
        })}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
      <div
        className={cn("flex shrink-0 justify-around gap-[var(--gap)]", {
          "flex-row": !vertical,
          "flex-col": vertical,
          "group-hover:[animation-play-state:paused]": pauseOnHover,
        })}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
