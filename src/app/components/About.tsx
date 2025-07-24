import { ChefHat, Heart } from "lucide-react";


export default function About(){
    return(
        <section id="about" className="py-16 bg-gradient-to-r from-green-100 to-emerald-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About The Queen's Table</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Our Heritage</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Located in the heart of London, The Queen's Table combines classic British elegance 
                  with the cozy warmth of a traditional pub. Our deep green walls, Chesterfield sofas, 
                  and dark wood paneling create an atmosphere of refined comfort.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Watch our chefs prepare traditional British dishes in our open kitchen, while you 
                  enjoy a pint of local craft ale by our warming fireplace.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <Heart className="h-6 w-6 mr-2 text-red-600" />
                  British Specialties
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• British free-range eggs & pork sausage</li>
                  <li>• Local ale for batters and pies</li>
                  <li>• Maris Piper potatoes for authentic chips</li>
                  <li>• Fresh North Sea cod</li>
                  <li>• Seasonal British strawberries</li>
                  <li>• Traditional shortcrust pastry</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-800 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <ChefHat className="h-8 w-8 mr-3 text-yellow-300" />
                Dining Experience
              </h3>
              <p className="text-lg leading-relaxed">
                When guests enter The Queen's Table, they're greeted by a cozy fireplace and the aroma of pies 
                baking in the kitchen. Soft British jazz plays in the background, while each table features 
                classic English crockery and fresh flowers. Our chalkboard displays daily specials including 
                traditional Sunday Roast.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}