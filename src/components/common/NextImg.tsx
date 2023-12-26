import React, {ComponentProps} from "react";
import Image from "next/image";

export default function NextImg(props: ComponentProps<typeof Image>) {
    const { src, alt, priority = false, className = '' } = props;

    return (
        <Image
            { ...props}
            priority={priority}
            src={src}
            alt={alt}
            className={className}
        />
    )
}
