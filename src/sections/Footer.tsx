import Link from "next/link";


export const Footer = () => {
  return <div className="bg-gray-800 p-4 mt-40 md:mt-0">
    <div className="flex justify-center items-center">
      <h1 className="font-serif text-lg">Made by <Link href="https://github.com/VedantRaval3011" className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Vedant Raval</Link >✌️</h1> 
    </div>
  </div>;
};
