export default function Button({ children }: any) {
    return <div>
        <button
            className={[
                "mx-2",
                "transition-colors",
                "z-10",
                "relative",
                "inline-block",
                "px-5",
                "py-3",
                "font-semibold",
                "font-jost",
                "text-[#DD9788]",
                "bg-white",
                "hover:text-white",
                "hover:bg-[#DD9788]",
                "rounded-[999px]",
                "border-2",
                "border-solid",
                "border-[#DD9788]",
                "tracking-wider",
            ].join(' ')}
        >{ children }</button>
    </div>;
};
