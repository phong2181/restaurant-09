export default function Drinks() {
  const drinks = [
    { name: 'Local Craft Ale', price: '£5/pint' },
    { name: 'House Cider', price: '£4.50/pint' },
    { name: 'English Breakfast Tea', price: '£2.50' },
    { name: 'London Dry Gin & Tonic', price: '£7' }
  ];

  return (
    <div className="max-w-2xl mx-auto mt-16">
      <h3 className="text-3xl font-bold text-green-800 mb-8">Beverages</h3>
      <div className="bg-green-50 rounded-lg p-6 shadow-md">
        {drinks.map((drink, index) => (
          <div key={index} className="flex justify-between border-b py-2">
            <span>{drink.name}</span>
            <span>{drink.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
