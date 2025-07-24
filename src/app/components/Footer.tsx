import { Crown } from "lucide-react";


export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Crown className="h-6 w-6 text-yellow-300" />
            <span className="text-2xl font-bold">The Queen's Table</span>
          </div>
          <p className="text-gray-400">
            © 2025 The Queen's Table. Serving authentic British cuisine since 1952.
          </p>
        </div>
      </footer>
    )
}