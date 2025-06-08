import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] font-[600] text-foreground transition-all cursor-pointer outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-abstractCyan shadow-xs hover:bg-abstractCyan/90",
        destructive:
          "bg-customCyan hover:bg-customCyan/90 dark:bg-abstractCyan/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:"min-h-12 px-6 py-2 has-[>svg]:px-3 text-[24px] overflow-hidden",
        sm: "min-h-8 rounded-md gap-1.5 px-4 has-[>svg]:px-2.5 text-[16px]",
        lg: "min-h-[44px] rounded-md py-4 px-8 has-[>svg]:px-4 text-[24px]",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
