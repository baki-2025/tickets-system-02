 export default function Banner({ inProgress, resolved }) {
  return (
    <div className="w-full  bg-cover bg-[url('/images/vector1.png') bg-center text-white  p-6 rounded-lg mx-4 my-4  flex justify-around gap-5">
      <div className="text-center border w-160 h-48  bg-gradient-to-br from-purple-600 to-purple-400">
        
        <h2 className="font-bold text-xl ">In Progress</h2>
        <p className="text-2xl">{inProgress}</p>
      </div>
      <div className="text-center border w-160 h-48 bg-gradient-to-br from-green-600 to-green-400 ">
        <h2 className="font-bold text-xl ">Resolved</h2>
        <p className="text-2xl">{resolved}</p>
      </div>
    </div>
  );
}
