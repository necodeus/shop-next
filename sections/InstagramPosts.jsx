import Link from 'next/link';

import css from '../styles/Instagram.module.css';
import { Heart, MessageSquare } from 'react-feather';

export default function InstagramPostsSection({ posts }) {
    return <div className="rounded-[17px] overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3">
            {posts.map((post, index) => <div key={index} className="relative">
                <Link href={ post.link }>
                    <a
                        target="_blank"
                        rel="noopener"
                        className={css.instagramLink + " outline-none cursor-pointer opacity-0 focus:opacity-100 hover:opacity-100 flex flex-col items-center justify-center hover:bg-[#00000066] focus:bg-[#00000066] w-full h-full absolute first-line:transition-all duration-200"}
                    >
                        <div className="flex my-4 text-white">
                            <Heart className="w-[24px] h-[24px] sm:w-[34px] sm:h-[34px]" />
                            <div className="ml-4 font-[Jost,sans-serif] font-medium text-[17px] sm:text-[24px]">{post.likes}</div>
                        </div>
                        <div className="flex my-4 text-white">
                            <MessageSquare className="w-[24px] h-[24px] sm:w-[34px] sm:h-[34px]" />
                            <div className="ml-4 font-[Jost,sans-serif] font-medium text-[17px] sm:text-[24px]">{post.comments}</div>
                        </div>
                    </a>
                </Link>
                <img
                    alt=""
                    className="object-cover h-full aspect-square"
                    src={ post.image }
                    width="100%"
                    height="100%"
                />
            </div>)}
        </div>
    </div>;
};
