import { Clock, MapPin, Phone } from "lucide-react";


export default function Contact(){
    return(
        <section id="contact" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Visit Us</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-700 rounded-lg p-6">
                <MapPin className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-300">
                  42 Covent Garden<br />
                  London WC2E 8RF<br />
                  United Kingdom
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-6">
                <Clock className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <p className="text-gray-300">
                  Mon-Sun: 11:00 - 23:00<br />
                  Kitchen closes at 22:30
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-6">
                <Phone className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p className="text-gray-300">
                  +44 20 7123 4567<br />
                  info@queenstable.co.uk
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl">
                Book a Table
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}