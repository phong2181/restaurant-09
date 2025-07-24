import { Star } from "lucide-react";


export default function Hero(){
    return(
        <section id="home" className="bg-gradient-to-b from-green-800 to-green-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to The Queen's Table
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-yellow-100">
            Modern British Brasserie in the Heart of London
          </p>
          <div className="flex items-center justify-center space-x-2 mb-8">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className="h-6 w-6 text-yellow-300 fill-current" />
            ))}
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed">
              Experience the finest British cuisine in an atmosphere of classic elegance and cozy pub warmth. 
              From traditional fish & chips to innovative British classics, every dish tells a story.
            </p>
          </div>
        </div>
      </section>
    )
}