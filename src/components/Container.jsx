export default function Container({ children, className = [] }) {
    return <div className={["max-w-[1000px] mx-auto my-[35px] px-5", ...className].join(' ')}>{ children }</div>;
};
