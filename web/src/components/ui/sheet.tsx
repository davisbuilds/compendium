"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SheetContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextValue | undefined>(
  undefined
);

function useSheet() {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error("useSheet must be used within a Sheet");
  }
  return context;
}

interface SheetProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function Sheet({ children, open: controlledOpen, onOpenChange }: SheetProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

interface SheetTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const SheetTrigger = React.forwardRef<HTMLButtonElement, SheetTriggerProps>(
  ({ children, asChild, ...props }, ref) => {
    const { setOpen } = useSheet();

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ onClick?: () => void }>, {
        onClick: () => setOpen(true),
      });
    }

    return (
      <button ref={ref} onClick={() => setOpen(true)} {...props}>
        {children}
      </button>
    );
  }
);
SheetTrigger.displayName = "SheetTrigger";

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right" | "top" | "bottom";
}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ className, children, side = "left", ...props }, ref) => {
    const { open, setOpen } = useSheet();

    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [open]);

    if (!open) return null;

    const sideClasses = {
      left: "inset-y-0 left-0 h-full w-3/4 max-w-sm border-r animate-slide-in-from-left",
      right: "inset-y-0 right-0 h-full w-3/4 max-w-sm border-l animate-slide-in-from-right",
      top: "inset-x-0 top-0 h-auto border-b animate-slide-in-from-top",
      bottom: "inset-x-0 bottom-0 h-auto border-t animate-slide-in-from-bottom",
    };

    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-50 bg-black/80 animate-fade-in"
          onClick={() => setOpen(false)}
        />
        {/* Sheet */}
        <div
          ref={ref}
          className={cn(
            "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out",
            sideClasses[side],
            className
          )}
          {...props}
        >
          {children}
          <button
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
      </>
    );
  }
);
SheetContent.displayName = "SheetContent";

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-lg font-semibold text-neutral-950", className)}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle };
