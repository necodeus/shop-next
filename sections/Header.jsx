import Link from 'next/link';

import {
	ShoppingCart as CartIcon,
	Search as SearchIcon,
	Menu as ShowNavIcon,
	X as HideNavIcon,
	User as AccountIcon,
	Users as FollowersIcon,
} from 'react-feather';

import css from '../styles/Header.module.css';
import Logo from '../components/Logo';

export default function HeaderSection() {
	const navigation = [
		{ name: 'Strona główna', url: '/' },
		{ name: 'Sklep', url: '/shop' },
		{ name: 'O mnie', url: '/about' },
		{ name: 'Kontakt', url: '/contact' },
	];

	return <header className="font-jost text-[16px] text-mineshaft">
		<div className="z-[60] top-0 w-full">
			<div className="flex justify-between items-center max-w-[1000px] mx-auto px-5">
                <button className="flex py-6">
                    <SearchIcon />
                    <div className="hidden md:block ml-3">Wyszukaj</div>
                </button>
				<div className="flex grow justify-end">
					<div className="flex items-center py-6 cursor-pointer">
						<CartIcon />
						<div className="ml-3">
							<div>
								<span>200 PLN</span>
							</div>
						</div>
					</div>
					<button className="ml-10 flex items-center py-6">
						<AccountIcon />
						<div className="hidden md:block ml-3">
							Konto
						</div>
					</button>
					<button className="flex md:hidden ml-10 py-6 cursor-pointer">
						<ShowNavIcon />
						<HideNavIcon />
					</button>
				</div>
			</div>
		</div>

		{<div className="md:hidden bg-white border-b border-solid border-white fixed w-full h-full top-0 z-50">
			<div className="flex justify-end bg-wildsand">
				<button className="flex mx-5 py-6 cursor-pointer">
					<ShowNavIcon />
					<HideNavIcon />
				</button>
			</div>
			<div className="flex flex-col justify-start items-center max-w-[1000px] mx-auto px-5 overflow-auto  text-[20px] pt-[74px] h-[calc(100%-74px)]">
				{navigation.map((link, index) => {
					return <Link key={index} href={link.url}>
						<a className="mt-6 py-6 block w-full text-center">{link.name}</a>
					</Link>
				})}
			</div>
		</div>}

		<div className="flex justify-center items-center max-w-[1000px] mx-auto px-5 my-[35px]">
			<div className="flex flex-col justify-center items-center">
				<Logo
					width="30px"
					height="30px"
					src="/instagram.svg"
					imageClasses=""
					link="https://www.instagram.com/dsmulewicz28"
					linkClasses={css.socialLink + " rounded-full relative inline-block z-10"}
				/>
				<div className="absolute text-mineshaft text-center text-[13px] font-medium mt-1 font-jost flex items-center z-0">
					<FollowersIcon size="15" className="mr-[5px]" /> 0
				</div>
			</div>

			<Logo
				width="180"
				height="180"
				src="/logo.svg"
				imageClasses="rounded-full"
				link="/"
				linkClasses="inline-block mx-[40px] md:mx-[100px]"
			/>

			<div className="flex flex-col justify-center items-center">
				<Logo
					width="30px"
					height="30px"
					src="/facebook.svg"
					imageClasses=""
					link="https://www.facebook.com/sklep.magia.ziemi"
					linkClasses={css.socialLink + " rounded-full relative inline-block z-10"}
				/>

				<div className="absolute text-mineshaft text-center text-[13px] font-medium mt-1 font-jost flex items-center z-0">
					<FollowersIcon size="15" className="mr-[5px]" /> 0
				</div>
			</div>
		</div>

		<div className="text-center mb-[35px] px-5 text-[17px] font-domine leading-[2.5]" dangerouslySetInnerHTML={{__html: "Biżuteria robiona z&nbsp;pasją, intencją i&nbsp;sercem z&nbsp;kamieni naturalnych.<br/>Idealna na prezent dla bliskiej Ci osoby"}}></div>

		<div className="hidden md:block md:bg-wildsand border-b-[1px] border-solid border-white">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-[1000px] mx-auto lg:h-[70px] px-5 text-[20px]">
                {navigation.map((link, index) => {
                    return <div key={index} className="relative flex justify-center">
                        <div className="py-6 font-medium opacity-0">{link.name}</div>
                        <Link href={link.url}>
                            <a className="outline-none absolute py-6 hover:font-medium focus:font-medium">{link.name}</a>
                        </Link>
                    </div>
                })}
			</div>
		</div>
	</header>
};
