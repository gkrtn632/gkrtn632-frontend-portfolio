import React, { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button {...props}>
            {children}
        </button>
    )
}
