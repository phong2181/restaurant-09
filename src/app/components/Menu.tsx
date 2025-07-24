import { useState } from 'react';
import MenuSection from './MenuSection';
import Drinks from './Drinks';

// Define the dish type
type Dish = {
  name: string;
  price: string;
  description: string;
  ingredients: string;
  image: string;
  details: string;
};

// Define the valid section keys
type SectionKey = 'starters' | 'mains' | 'desserts';

// Define the shape for each menu section
type MenuSectionType = {
  title: string;
  subtitle: string;
  items: Dish[];
};

// Props for the Menu component
type MenuProps = {
  openModal: (dish: Dish) => void;
};

export default function Menu({ openModal }: MenuProps) {
  // ✅ Explicitly type the state as SectionKey
  const [activeSection, setActiveSection] = useState<SectionKey>('starters');

  // ✅ Explicitly type the whole menuSections object
  const menuSections: Record<SectionKey, MenuSectionType> = {
    starters: {
      title: 'Starters',
      subtitle: 'Begin Your British Journey',
      items: [
        {
          name: 'Pea & Mint Soup',
          price: '£6',
          description: 'A fresh green pea soup with a touch of mint, served with warm sourdough.',
          ingredients: 'Fresh peas, mint, vegetable stock, cream, butter, sourdough bread',
          image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400',
          details: 'Our signature soup is made daily with the finest British peas, freshly picked mint from our herb garden, and rich vegetable stock. Served piping hot with artisanal sourdough bread baked fresh in our kitchen. Perfect for a chilly London day.',
        },
        {
          name: 'Scotch Egg',
          price: '£7',
          description: 'Soft-boiled egg wrapped in sausage meat, coated in breadcrumbs, deep-fried until golden.',
          ingredients: 'Free-range egg, British pork sausage, breadcrumbs, mustard mayo',
          image: 'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=400',
          details: 'A traditional British pub classic featuring free-range eggs from local farms, wrapped in premium British pork sausage meat, coated in golden breadcrumbs and fried to perfection. Served with our house-made mustard mayonnaise for the authentic experience.',
        },
      ],
    },
    mains: {
      title: 'Main Courses',
      subtitle: 'Hearty British Classics',
      items: [
        {
          name: 'Steak & Ale Pie',
          price: '£14',
          description: 'Slow-cooked beef in rich ale gravy, topped with golden shortcrust pastry. Served with mashed potatoes and garden peas.',
          ingredients: 'British beef chuck, dark ale, onions, carrots, shortcrust pastry, butter, flour, potatoes, peas',
          image: 'https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=400',
          details: 'Our signature pie features tender British beef chuck, slow-cooked for hours in rich dark ale with caramelized onions and carrots. Topped with our handmade shortcrust pastry and baked until golden. Accompanied by creamy mashed potatoes and fresh garden peas.',
        },
        {
          name: 'Fish & Chips',
          price: '£13',
          description: 'Beer-battered cod, chunky chips, mushy peas, and homemade tartar sauce.',
          ingredients: 'Fresh cod fillet, ale batter, Maris Piper potatoes, peas, vinegar, tartar sauce (mayo, pickles, capers)',
          image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
          details: 'Fresh North Sea cod fillet in our signature beer batter, served with chunky chips made from Maris Piper potatoes. Accompanied by traditional mushy peas and our house-made tartar sauce with pickles and capers. A true British institution.',
        },
      ],
    },
    desserts: {
      title: 'Desserts',
      subtitle: 'Sweet British Endings',
      items: [
        {
          name: 'Sticky Toffee Pudding',
          price: '£6',
          description: 'Warm sponge cake with dates, drenched in rich toffee sauce, served with vanilla custard.',
          ingredients: 'Dates, flour, butter, brown sugar, cream, eggs, vanilla custard',
          image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400',
          details: 'Our beloved sticky toffee pudding features a moist sponge cake studded with chopped dates, generously drizzled with our rich homemade toffee sauce. Served warm with creamy vanilla custard for the ultimate comfort dessert experience.',
        },
        {
          name: 'Eton Mess',
          price: '£5',
          description: 'Crushed meringue, whipped cream, and fresh strawberries.',
          ingredients: 'British strawberries, double cream, sugar, egg whites (meringue)',
          image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
          details: 'A delightfully messy dessert featuring crisp meringue pieces, freshly whipped double cream, and seasonal British strawberries. Named after the famous Eton College, this dessert embodies the playful side of British cuisine.',
        },
      ],
    },
  };

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
        <p className="text-xl mb-12">Celebrating the best of British culinary tradition</p>

        <div className="flex justify-center space-x-4 mb-12">
          {Object.keys(menuSections).map((key) => {
            const typedKey = key as SectionKey; // ✅ safely cast
            return (
              <button
                key={typedKey}
                onClick={() => setActiveSection(typedKey)}
                className={`px-6 py-3 rounded-full font-semibold ${
                  activeSection === typedKey ? 'bg-green-800 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {menuSections[typedKey].title}
              </button>
            );
          })}
        </div>

        <MenuSection section={menuSections[activeSection]} openModal={openModal} />
        <Drinks />
      </div>
    </section>
  );
}
