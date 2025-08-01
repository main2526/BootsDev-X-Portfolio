import { FaUserTie } from "react-icons/fa";

export default function Header() {
  return (
    <header className="text-center py-16 px-12 bg-slate-800 text-white relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600"></div>

      <div className="profile-img w-40 h-40 rounded-full mx-auto mb-8 bg-slate-700 flex items-center justify-center text-6xl text-yellow-500 border-4 border-yellow-500 shadow-lg">
        <FaUserTie />
      </div>

      <h1 className="name text-5xl font-bold mb-2 text-white tracking-wide font-serif">
        Johanny A. Rodriguez
      </h1>
      <p className="title text-xl text-yellow-500 font-light italic tracking-wide">
        Desarrollador Full Stack
      </p>
    </header>
  );
}
