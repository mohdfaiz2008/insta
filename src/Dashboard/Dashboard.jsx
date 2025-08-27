import img from "../assets/camera-man.jpg"


export default function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
      <div className="w-1/4 h-full border border-gray-300 shadow flex flex-col">
          {/* header */}
        <div className="w-full h-12 flex justify-center items-center bg-indigo-200 shadow-md">
            <h1 className="text-2xl font-bold text-indigo-950">Photo</h1>
        </div>    
        {/* middle */}
        <div className="w-full flex-grow border-2 border-black bg-cover bg-center" style={{backgroundImage: `url(${img})`}}>
           
        </div>
      </div>
    </div>
  );
}
