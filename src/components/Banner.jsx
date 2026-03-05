 export default function Banner({ inProgress, resolved }) {
  return (
    <div className="w-full bg-[url('/img/vector1.png')] bg-cover bg-center text-white  p-6 rounded-lg mx-4 my-4  flex justify-around">
      <div className="text-center border w-160 h-48 bg-gradient-to-r from-purple-400 to-violet-600">
        <h2 className="font-bold text-xl ">In Progress</h2>
        <p className="text-2xl">{inProgress}</p>
      </div>
      <div className="text-center border w-160 h-48 bg-gradient-to-r from-green-600  to-emerald-500 ">
        <h2 className="font-bold text-xl">Resolved</h2>
        <p className="text-2xl">{resolved}</p>
      </div>
    </div>
  );
}
