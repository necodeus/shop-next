import Link from "next/link";

export default function FooterSection({ navigations }) {
	return <footer className="font-jost">
		<div className="bg-wildsand text-mineshaft">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-[1000px] mx-auto px-5 py-5 text-[18px]">
				<div>
					<div className="my-5 pb-5 font-semibold">Kategorie produktowe</div>
					{navigations.footer_product_categories.map((nav, index) =>
						<div key={index} className="mb-4 font-normal">
							<Link href={nav.url}>
								<a className="hover:underline focus:underline">{nav.name}</a>
							</Link>
						</div>
					)}
				</div>
				<div>
					<div className="my-5 pb-5 font-semibold">Informacje</div>
					{navigations.footer_pages.map((nav, index) =>
						<div key={index} className="mb-4 font-normal">
							<Link href={nav.url}>
								<a className="hover:underline focus:underline">{nav.name}</a>
							</Link>
						</div>
					)}
				</div>
				<div>
					<div className="my-5 pb-5 font-semibold">Blog</div>
					{navigations.footer_blog.map((nav, index) =>
						<div key={index} className="mb-4 font-normal">
						<Link href={nav.url}>
							<a className="hover:underline focus:underline">{nav.name}</a>
						</Link>
						</div>
					)}
				</div>
			</div>
		</div>
		<div className="flex flex-col text-mineshaft justify-between items-center max-w-[1000px] mx-auto px-5 bg-white text-[16px] md:flex-row">
			<div className="mt-4 mb-2 md:my-4">
				Copyright © 2022 - <Link href="https://magiaziemi.necodeo.com"><a className="hover:underline focus:underline cursor-pointer">magiaziemi.necodeo.com</a></Link>
			</div>
			<div className="mb-4 mt-2 md:my-4">
				<Link
					className="hover:underline focus:underline"
					href="https://www.necodeo.com"
				>
					<div>Made with <span className="align-middle" title="love">❤️</span> by <Link href="https://www.necodeo.com"><a className="hover:underline focus:underline cursor-pointer">www.necodeo.com</a></Link></div>
				</Link>
			</div>
		</div>
	</footer>;
};
