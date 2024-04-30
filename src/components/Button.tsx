"use client";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  customClasses?: string;
}

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, type = "button", customClasses = "", onClick }, ref) => {
    const buttonProps = onClick ? { onClick } : {};

    return (
      <button
        type={type}
        className={`text-white px-14 text-center rounded-md bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-600 hover:to-purple-600 py-4 hover:cursor-pointer transition-all duration-500 ${customClasses}`}
        ref={ref}
        {...buttonProps}
      >
        {text}
      </button>
    );
  }
);

export default Button;
