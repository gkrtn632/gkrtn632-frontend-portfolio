import React, { HTMLAttributes } from "react";

interface LabelProps extends HTMLAttributes<HTMLLabelElement>{
    children: React.ReactNode;
}

export default function Label({ children, ...props }: LabelProps) {
    return (
        <label {...props}>
            {children}
        </label>
    )
}
