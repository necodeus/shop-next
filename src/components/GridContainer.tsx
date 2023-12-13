export default function GridContainer({ children }: any) {
    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 font-normal">{ children }</div>;
};
