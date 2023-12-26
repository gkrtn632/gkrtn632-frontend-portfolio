import React, { ComponentProps } from "react";
import Link from "next/link";

export default function NextLink(props: ComponentProps<typeof Link>) {
    const { className = '', children } = props;

    return (
        <Link
            {...props}
            className={className}
        >
            {children}
        </Link>
    )
}
