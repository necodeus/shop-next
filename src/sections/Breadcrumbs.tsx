import Link from "next/link";

export default function BreadcrumbsSection({ breadcrumbs = [] }) {
    return (
        <div className="bg-wildsand md:bg-white text-mineshaft max-w-[1000px] mx-auto px-5 py-4 md:py-0 md:my-4 font-jost">
            {breadcrumbs.map(
                (item: any, index) => {
                    return index < breadcrumbs.length - 1 ? <span key={ index }><Link href="/">{ item.name }</Link><span> / </span></span> : <span key={index}>{ item.name }</span>;
                }
            )}
        </div>
    );
};
