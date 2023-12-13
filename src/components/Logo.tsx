import Link from "next/link";

export default function Logo({
    width = "180px",
    height = "180px",
    alt="",
    link="",
    linkClasses = "",
    src="/logo.svg",
    imageClasses = "",
}) {
    return (
        <Link
            href={link}
            className={linkClasses}
            target="_blank"
            rel="noopener"
        >
            <img
                alt={alt}
                src={src}
                width={width}
                height={height}
                className={imageClasses}
            />
        </Link>
    );
};
