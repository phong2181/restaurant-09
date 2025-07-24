
type Dish = {
  name: string;
  price: string;
  description: string;
  ingredients: string;
  image: string;
  details: string;
};

type ModalProps = {
  dish: Dish;
  onClose: () => void;
};

export default function Modal({ dish, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{dish.name}</h2>
        <img src={dish.image} alt={dish.name} className="w-full mb-4" />
        <p className="mb-2">{dish.description}</p>
        <p className="mb-2"><strong>Ingredients:</strong> {dish.ingredients}</p>
        <p className="mb-4">{dish.details}</p>
        <button
          onClick={onClose}
          className="bg-green-800 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
