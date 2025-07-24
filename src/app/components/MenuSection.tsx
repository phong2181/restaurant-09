import MenuItem from './MenuItem';

// Reuse Dish type
type Dish = {
  name: string;
  price: string;
  description: string;
  ingredients: string;
  image: string;
  details: string;
};

type MenuSectionType = {
  title: string;
  subtitle: string;
  items: Dish[];
};

// ✅ Define props type for MenuSection
type MenuSectionProps = {
  section: MenuSectionType;
  openModal: (dish: Dish) => void;
};

export default function MenuSection({ section, openModal }: MenuSectionProps) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-green-800 mb-2">{section.title}</h3>
      <p className="text-gray-600 mb-8">{section.subtitle}</p>
      <div className="grid gap-8">
        {section.items.map((item, idx) => (
          <MenuItem key={idx} item={item} openModal={openModal} />
        ))}
      </div>
    </div>
  );
}
