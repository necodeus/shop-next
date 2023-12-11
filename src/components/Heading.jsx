export default function Heading({ type = "h1", children }) {
    if (type === 'h1') {
        return <h1 className="font-semibold text-mineshaft text-[34px] tracking-wider">{children}</h1>
    } else if (type === 'h2') {
        return <h2 className="font-medium text-mineshaft text-[24px] tracking-wider">{children}</h2>
    }
};
