export default function Container({ children, className = [] }: any) {
    return <div className={["max-w-[1000px] mx-auto my-[35px] px-5", ...className].join(' ')}>{ children }</div>;
};
