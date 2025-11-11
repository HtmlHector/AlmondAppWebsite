import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAppleAlt, faCarrot, faCookie, faFish, 
  faBreadSlice, faCheese, faEgg, faPizzaSlice,
  faCoffee, faWineBottle, faIceCream, faSeedling,
  faLeaf, faDrumstickBite, faBacon, faCandyCane,
  faPepperHot, faLemon, faBowlFood, faBottleWater
} from '@fortawesome/free-solid-svg-icons';

export default function ScrollingCategories() {
  // Category data with icons and names
  const topRowCategories = [
    { icon: faBottleWater, name: 'Beverages', color: 'bg-blue-100 text-blue-600' },
    { icon: faDrumstickBite, name: 'Protein Foods', color: 'bg-red-100 text-red-600' },
    { icon: faAppleAlt, name: 'Fresh Produce', color: 'bg-green-100 text-green-600' },
    { icon: faBreadSlice, name: 'Bakery Items', color: 'bg-amber-100 text-amber-600' },
    { icon: faCheese, name: 'Dairy Products', color: 'bg-yellow-100 text-yellow-600' },
    { icon: faFish, name: 'Seafood', color: 'bg-cyan-100 text-cyan-600' },
    { icon: faEgg, name: 'Breakfast', color: 'bg-orange-100 text-orange-600' },
    { icon: faCookie, name: 'Snacks', color: 'bg-purple-100 text-purple-600' },
  ];

  const middleRowCategories = [
    { icon: faPepperHot, name: 'Spices & Herbs', color: 'bg-red-100 text-red-600' },
    { icon: faSeedling, name: 'Organic Foods', color: 'bg-green-100 text-green-600' },
    { icon: faCoffee, name: 'Coffee & Tea', color: 'bg-brown-100 text-brown-600' },
    { icon: faWineBottle, name: 'Condiments', color: 'bg-indigo-100 text-indigo-600' },
    { icon: faBowlFood, name: 'Prepared Meals', color: 'bg-pink-100 text-pink-600' },
    { icon: faLeaf, name: 'Vegetarian', color: 'bg-emerald-100 text-emerald-600' },
    { icon: faCarrot, name: 'Vegetables', color: 'bg-orange-100 text-orange-600' },
    { icon: faPizzaSlice, name: 'Fast Food', color: 'bg-yellow-100 text-yellow-600' },
  ];

  const bottomRowCategories = [
    { icon: faCandyCane, name: 'Sweets', color: 'bg-pink-100 text-pink-600' },
    { icon: faIceCream, name: 'Frozen Foods', color: 'bg-blue-100 text-blue-600' },
    { icon: faBacon, name: 'Meat Products', color: 'bg-red-100 text-red-600' },
    { icon: faLemon, name: 'Citrus Fruits', color: 'bg-yellow-100 text-yellow-600' },
    { icon: faBottleWater, name: 'Supplements', color: 'bg-purple-100 text-purple-600' },
    { icon: faSeedling, name: 'Gluten-Free', color: 'bg-green-100 text-green-600' },
    { icon: faLeaf, name: 'Vegan Options', color: 'bg-emerald-100 text-emerald-600' },
    { icon: faBowlFood, name: 'Baby Food', color: 'bg-indigo-100 text-indigo-600' },
  ];

  // Duplicate arrays for infinite scroll effect
  const topRow = [...topRowCategories, ...topRowCategories];
  const middleRow = [...middleRowCategories, ...middleRowCategories];
  const bottomRow = [...bottomRowCategories, ...bottomRowCategories];

  const CategoryCard = ({ category, index }) => (
    <div className="flex-shrink-0 px-3">
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-green-200">
        <div className="flex flex-col items-center gap-3 min-w-[140px]">
          <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
            <FontAwesomeIcon icon={category.icon} size="lg" />
          </div>
          <span className="text-gray-700 font-medium text-sm text-center whitespace-nowrap">
            {category.name}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-50/30 to-white overflow-hidden">
      <div className="max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Explore Food Categories
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
            Scan products across all categories to ensure they're safe for your dietary needs
          </p>
        </div>

        <div className="space-y-6">
          {/* Top Row - Scrolling Left */}
          <motion.div
            animate={{ x: [0, -50 * topRowCategories.length] }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
            className="flex"
          >
            {topRow.map((category, index) => (
              <CategoryCard key={`top-${index}`} category={category} index={index} />
            ))}
          </motion.div>

          {/* Middle Row - Scrolling Right */}
          <motion.div
            animate={{ x: [-50 * middleRowCategories.length, 0] }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
            className="flex"
          >
            {middleRow.map((category, index) => (
              <CategoryCard key={`middle-${index}`} category={category} index={index} />
            ))}
          </motion.div>

          {/* Bottom Row - Scrolling Left */}
          <motion.div
            animate={{ x: [0, -50 * bottomRowCategories.length] }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
            className="flex"
          >
            {bottomRow.map((category, index) => (
              <CategoryCard key={`bottom-${index}`} category={category} index={index} />
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Check any product from any category</p>
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 shadow-lg">
            Start Scanning Now
          </button>
        </div>
      </div>
    </section>
  );
}
