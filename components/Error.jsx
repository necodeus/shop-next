export default function Error({ code, message }) {
	return <div className="relative flex justify-center items-center w-full mt-[4%]">
		<div className="text-[200px] text-[#f0f0f0] italic">{ code }</div>
		<div className="absolute text-[26px] uppercase text-[#555]">{ message }</div>
	</div>;
};
