export default function ModalProgress({ stages, activeStage }) {
    return <div>
        <div className="bg-[#eee] min-h-[4px] flex rounded-[999px] overflow-hidden">
            <div className="min-h-[4px] bg-[#6ff58d] transition-[width] duration-300 ease-in-out" style={{ width: ((activeStage * 100 / stages.length) || 0) + '%' }}></div>
        </div>
        <div className="flex justify-between pt-[19px]">
            {stages.map((stage, index) => (
                <div
                    key={index}
                    className={[
                        "w-full opacity-50 transition-opacity duration-300 ease-in-out font-medium text-center",
                        index === 0 && stages.length > 1 ? 'text-left' : '',
                        index === stages.length && stages.length > 1 ? 'text-right' : '',
                        index === activeStage - 1 ? "opacity-100 font-semibold" : '',
                    ].join(' ')}
                >{stage}</div>
            ))}
        </div>
    </div>
};
