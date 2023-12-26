import React, {HTMLAttributes} from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
}

export default function Input({ children, ...props }: InputProps) {
    return (
        <input {...props}>
            {children}
        </input>
    )
}
