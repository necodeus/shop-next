import Link from "next/link";

export default function BreadcrumbsSection({ breadcrumbs = [] }) {
    let url = '';

    return <div className="bg-wildsand md:bg-white text-mineshaft max-w-[1000px] mx-auto px-5 py-4 md:py-0 md:my-4 font-jost">
        {breadcrumbs.map(
            ({ name, slug }, index) => {
                url += slug + '/';
                return index < breadcrumbs.length - 1 ? <span key={ index }><Link href={ url }><a>{ name }</a></Link><span> / </span></span> : <span key={index}>{ name }</span>
            }
        )}
	</div>
};
