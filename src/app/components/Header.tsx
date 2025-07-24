import { Crown } from "lucide-react";


export default function Header(){
    return(
        <header className="bg-gradient-to-r from-green-900 to-green-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Crown className="h-8 w-8 text-yellow-300" />
              <h1 className="text-3xl font-bold">The Queen's Table</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-yellow-300 transition duration-300">Home</a>
              <a href="#menu" className="hover:text-yellow-300 transition duration-300">Menu</a>
              <a href="#about" className="hover:text-yellow-300 transition duration-300">About</a>
              <a href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</a>
            </nav>
          </div>
        </div>
      </header>
    )
}