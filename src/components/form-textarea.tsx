import * as React from "react";
import { cn } from "../utils/cn";

export interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

/**
 * FormTextArea component with permanently visible labels positioned above the textarea.
 * Implements accessible labels, clear borders, and clean error states.
 */
export const FormTextArea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ className, label, error, id, rows = 4, ...props }, ref) => {
    const textareaId = id || React.useId();

    return (
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor={textareaId}
          className="font-sans text-sm font-medium text-[#111111]"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            "w-full px-4 py-3 bg-transparent border rounded-sm font-sans text-[#111111] transition-all duration-200 outline-none resize-y",
            error 
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
              : "border-[#E8E8E8] focus:border-[#111111] focus:ring-1 focus:ring-[#111111]",
            className
          )}
          {...props}
        />
        {error && (
          <span className="font-sans text-xs text-red-500 mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

FormTextArea.displayName = "FormTextArea";
