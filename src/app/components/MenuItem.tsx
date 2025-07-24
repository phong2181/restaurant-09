import { Eye } from 'lucide-react';
// Reuse Dish type
type Dish = {
  name: string;
  price: string;
  description: string;
  ingredients: string;
  image: string;
  details: string;
};

// ✅ Define props type
type MenuItemProps = {
  item: Dish;
  openModal: (dish: Dish) => void;
};

export default function MenuItem({ item, openModal }:MenuItemProps) {
  return (
    <div className="bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between mb-3">
            <h4 className="text-2xl font-bold">{item.name}</h4>
            <span className="text-2xl font-bold text-green-800">{item.price}</span>
          </div>
          <p className="mb-4">{item.description}</p>
          <p className="text-sm text-gray-600 mb-4"><strong>Ingredients:</strong> {item.ingredients}</p>
          <button
            onClick={() => openModal(item)}
            className="bg-green-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <Eye className="h-4 w-4" />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}
