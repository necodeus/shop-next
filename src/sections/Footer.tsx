import Link from "next/link";

export default function FooterSection(): any {
	const navigations = {
		footer_product_categories: [
			{ name: 'Zioła', url: '/shop' },
			{ name: 'Kamienie', url: '/shop' },
			{ name: 'Kryształy', url: '/shop' },
			{ name: 'Różdżki', url: '/shop' },
			{ name: 'Wisiorki', url: '/shop' },
			{ name: 'Bransoletki', url: '/shop' },
			{ name: 'Kolczyki', url: '/shop' },
			{ name: 'Książki', url: '/shop' },
			{ name: 'Pendrive', url: '/shop' },
			{ name: 'Pozostałe', url: '/shop' },
		],
		footer_pages: [
			{ name: 'Regulamin', url: '/regulamin' },
			{ name: 'Polityka prywatności', url: '/polityka-prywatnosci' },
			{ name: 'Polityka cookies', url: '/polityka-cookies' },
			{ name: 'Odstąpienie od umowy', url: '/odstapienie-od-umowy' },
			{ name: 'Reklamacje', url: '/reklamacje' },
			{ name: 'Dostawa', url: '/dostawa' },
			{ name: 'Płatności', url: '/platnosci' },
			{ name: 'Kontakt', url: '/kontakt' },
			{ name: 'HELLO', url: '/hello-world' },
		],
		footer_blog: [
			{ name: 'Blog', url: '/blog' },
			{ name: 'Wpisy', url: '/blog' },
			{ name: 'Kategorie', url: '/blog' },
			{ name: 'Tagi', url: '/blog' },
		],
	};

	return (
        <footer className="font-jost">
            <div className="bg-wildsand text-mineshaft">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-[1000px] mx-auto px-5 py-5 text-[18px]">
                    <div>
                        <div className="my-5 pb-5 font-semibold">Kategorie produktowe</div>
                        {navigations.footer_product_categories.map((nav, index) =>
                            <div key={index} className="mb-4 font-normal">
                                <Link href={nav.url} className="hover:underline focus:underline">
                                    {nav.name}
                                </Link>
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="my-5 pb-5 font-semibold">Informacje</div>
                        {navigations.footer_pages.map((nav, index) =>
                            <div key={index} className="mb-4 font-normal">
                                <Link href={nav.url} className="hover:underline focus:underline">
                                    {nav.name}
                                </Link>
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="my-5 pb-5 font-semibold">Blog</div>
                        {navigations.footer_blog.map((nav, index) =>
                            <div key={index} className="mb-4 font-normal">
								<Link href={nav.url} className="hover:underline focus:underline">
									{nav.name}
								</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-mineshaft justify-between items-center max-w-[1000px] mx-auto px-5 bg-white text-[16px] md:flex-row">
                <div className="mt-4 mb-2 md:my-4">
                    Copyright © 2022 - <Link
                    href="https://magiaziemi.necodeo.com"
                    className="hover:underline focus:underline cursor-pointer">magiaziemi.necodeo.com</Link>
                </div>
                <div className="mb-4 mt-2 md:my-4">
                    <Link className="hover:underline focus:underline" href="https://www.necodeo.com">
                        <div>Made with <span className="align-middle" title="love">❤️</span> by www.necodeo.com</div>
                    </Link>
                </div>
            </div>
        </footer>
    );
};
