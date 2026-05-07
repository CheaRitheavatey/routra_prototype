import map1Image from './map1.png';

export const locations = [
  {
    id: 'angkor-borei',
    name: 'Angkor Borei',
    region: 'Takeo Province',
    description: 'Ancient pre-Angkorian city surrounded by flooded rice paddies and river channels.',
    image: map1Image,
    color: '#4a7c59',
    markers: [
      { id: 'm1', type: 'restaurant', name: 'Borei Kitchen', description: 'Traditional Khmer cuisine by the river', x: 30, y: 45 },
      { id: 'm2', type: 'toilet', name: 'Public Restroom', description: 'Clean facilities near the market', x: 55, y: 35 },
      { id: 'm3', type: 'homestay', name: 'Chan Family Home', description: 'Authentic village stay, 2 rooms available', x: 70, y: 60 },
      { id: 'm4', type: 'business', name: 'River Craft Shop', description: 'Handmade pottery and silk weaving', x: 45, y: 70 },
      { id: 'm5', type: 'restaurant', name: 'Lotus Garden Café', description: 'Breakfast & local snacks', x: 20, y: 65 },
    ],
  },
  {
    id: 'prek-toal',
    name: 'Prek Toal',
    region: 'Battambang Province',
    description: 'Floating village on Tonlé Sap lake, one of Asia\'s most important freshwater ecosystems.',
    image: map1Image,
    color: '#2d6a9f',
    markers: [
      { id: 'm1', type: 'homestay', name: 'Floating House Srey', description: 'Stay in a traditional floating home', x: 40, y: 50 },
      { id: 'm2', type: 'restaurant', name: 'Fish Market Grill', description: 'Fresh catch grilled on the boat', x: 65, y: 35 },
      { id: 'm3', type: 'business', name: 'Bird Watching Tour', description: 'Rare bird species sanctuary visits', x: 25, y: 40 },
      { id: 'm4', type: 'toilet', name: 'Community Facilities', description: 'Near village centre', x: 50, y: 65 },
    ],
  },
  {
    id: 'kampot-riverside',
    name: 'Kampot Riverside',
    region: 'Kampot Province',
    description: 'Charming riverside town known for pepper farms, French colonial architecture, and serene views.',
    image: map1Image,
    color: '#8b6914',
    markers: [
      { id: 'm1', type: 'restaurant', name: 'Pepper Farm Table', description: 'Farm-to-table using famous Kampot pepper', x: 35, y: 40 },
      { id: 'm2', type: 'homestay', name: 'Riverside Bungalow', description: 'Scenic river views, hammock included', x: 60, y: 55 },
      { id: 'm3', type: 'business', name: 'La Plantation Store', description: 'Buy authentic Kampot pepper products', x: 75, y: 35 },
      { id: 'm4', type: 'toilet', name: 'Riverfront Facilities', description: 'Near the night market', x: 45, y: 70 },
      { id: 'm5', type: 'restaurant', name: 'Mango Garden', description: 'Tropical drinks and local dishes', x: 20, y: 50 },
      { id: 'm6', type: 'business', name: 'Kayak Rental', description: 'Explore the Kampot River by kayak', x: 55, y: 25 },
    ],
  },
  {
    id: 'battambang-village',
    name: 'Battambang Village',
    region: 'Battambang Province',
    description: 'Cambodia\'s second-largest city with stunning temples, bamboo train, and vibrant arts scene.',
    image: map1Image,
    color: '#7b4ea0',
    markers: [
      { id: 'm1', type: 'restaurant', name: 'Colonial Kitchen', description: 'Fusion Khmer dishes in heritage building', x: 40, y: 45 },
      { id: 'm2', type: 'homestay', name: 'Artisan Home Stay', description: 'Stay with a local artist family', x: 65, y: 40 },
      { id: 'm3', type: 'business', name: 'Bamboo Train Experience', description: 'The famous norry bamboo train ride', x: 30, y: 60 },
      { id: 'm4', type: 'toilet', name: 'Market Restrooms', description: 'Central market facilities', x: 55, y: 70 },
      { id: 'm5', type: 'business', name: 'Phare Circus', description: 'Social enterprise performing arts', x: 75, y: 55 },
    ],
  },
  {
    id: 'koh-rong',
    name: 'Koh Rong Community',
    region: 'Koh Kong Province',
    description: 'Island community with pristine beaches, bioluminescent plankton, and untouched coral reefs.',
    image: map1Image,
    color: '#1a7a6e',
    markers: [
      { id: 'm1', type: 'homestay', name: 'Beach Hut Collective', description: 'Eco-friendly bamboo huts on the beach', x: 45, y: 55 },
      { id: 'm2', type: 'restaurant', name: 'Sunset Shack', description: 'Seafood barbecue at sunset', x: 30, y: 40 },
      { id: 'm3', type: 'business', name: 'Dive & Snorkel Hub', description: 'Equipment rental & guided reef tours', x: 65, y: 35 },
      { id: 'm4', type: 'toilet', name: 'Beach Facilities', description: 'Near the pier area', x: 50, y: 70 },
      { id: 'm5', type: 'restaurant', name: 'Fisherman\'s Wharf', description: 'Catch of the day, daily menu', x: 70, y: 60 },
    ],
  },
];

export const activities = {
  'angkor-borei': [
    { id: 'a1', name: 'River Boat Tour', description: 'Explore ancient waterways by traditional wooden boat with local guide.', price: 15, duration: '3 hours', image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'a2', name: 'Rice Paddy Walk', description: 'Walk through flooded rice paddies and learn traditional farming techniques.', price: 8, duration: '2 hours', image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'a3', name: 'Pottery Workshop', description: 'Learn ancient Khmer pottery techniques from master craftspeople.', price: 20, duration: '4 hours', image: 'https://images.pexels.com/photos/3593427/pexels-photo-3593427.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ],
  'prek-toal': [
    { id: 'a1', name: 'Floating Village Tour', description: 'Discover life on the water in Cambodia\'s famous floating communities.', price: 12, duration: '2 hours', image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'a2', name: 'Bird Watching Expedition', description: 'Spot rare migratory birds in one of Southeast Asia\'s most important sanctuaries.', price: 25, duration: '4 hours', image: 'https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'a3', name: 'Fishing with Locals', description: 'Try traditional fishing methods with Tonlé Sap fishermen.', price: 18, duration: '3 hours', image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ],
  'kampot-riverside': [
    { id: 'a1', name: 'Pepper Farm Tour', description: 'Walk through the legendary Kampot pepper farms with a local farmer.', price: 10, duration: '2 hours', image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'a2', name: 'Sunset Kayaking', description: 'Paddle down the Kampot River at golden hour with a local guide.', price: 22, duration: '3 hours', image: 'https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'a3', name: 'Cooking Class', description: 'Cook traditional Khmer dishes using fresh market ingredients.', price: 30, duration: '5 hours', image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ],
  'battambang-village': [
    { id: 'a1', name: 'Bamboo Train Ride', description: 'Ride the famous norry bamboo train through countryside villages.', price: 8, duration: '1 hour', image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'a2', name: 'Temple Sunrise Cycle', description: 'Cycle to ancient temples at sunrise with a local guide.', price: 15, duration: '3 hours', image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'a3', name: 'Arts Village Walk', description: 'Explore Battambang\'s thriving arts and crafts community.', price: 12, duration: '2.5 hours', image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ],
  'koh-rong': [
    { id: 'a1', name: 'Reef Snorkeling', description: 'Explore pristine coral reefs teeming with tropical fish.', price: 20, duration: '3 hours', image: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'a2', name: 'Bioluminescence Night Swim', description: 'Swim in glowing bioluminescent plankton after dark.', price: 25, duration: '2 hours', image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'a3', name: 'Island Jungle Trek', description: 'Hike through undisturbed jungle to hidden waterfalls.', price: 18, duration: '4 hours', image: 'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ],
};

export const guides = {
  'angkor-borei': [
    { id: 'g1', name: 'Dara Sok', age: 34, languages: ['Khmer', 'English'], speciality: 'Archaeology & History', rating: 4.9, reviews: 47, price: 35, image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400', bio: 'Born in Angkor Borei, Dara has guided travelers through the region\'s ancient sites for 10 years.' },
    { id: 'g2', name: 'Sreymom Chan', age: 28, languages: ['Khmer', 'English', 'French'], speciality: 'Culture & Food', rating: 4.8, reviews: 31, price: 28, image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400', bio: 'Passionate about sharing Cambodian culinary traditions and village life with visitors.' },
  ],
  'prek-toal': [
    { id: 'g1', name: 'Virak Panha', age: 42, languages: ['Khmer', 'English'], speciality: 'Wildlife & Ecology', rating: 5.0, reviews: 62, price: 40, image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', bio: 'Conservation expert with deep knowledge of Tonlé Sap\'s unique ecosystem.' },
    { id: 'g2', name: 'Bopha Ly', age: 25, languages: ['Khmer', 'English'], speciality: 'Fishing & Village Life', rating: 4.7, reviews: 19, price: 25, image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400', bio: 'Grew up in the floating village and loves sharing her unique childhood with travelers.' },
  ],
  'kampot-riverside': [
    { id: 'g1', name: 'Kosal Vin', age: 31, languages: ['Khmer', 'English', 'Thai'], speciality: 'Pepper & Agriculture', rating: 4.9, reviews: 54, price: 32, image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400', bio: 'Third-generation pepper farmer turned guide, sharing the story of Kampot\'s famous spice.' },
    { id: 'g2', name: 'Nary Heng', age: 29, languages: ['Khmer', 'English'], speciality: 'River & Outdoors', rating: 4.8, reviews: 38, price: 30, image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400', bio: 'Outdoor enthusiast who knows every bend of the Kampot River.' },
  ],
  'battambang-village': [
    { id: 'g1', name: 'Rathana Keo', age: 38, languages: ['Khmer', 'English'], speciality: 'Art & Architecture', rating: 4.9, reviews: 71, price: 38, image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400', bio: 'Former Phare Circus performer with a passion for Battambang\'s creative scene.' },
  ],
  'koh-rong': [
    { id: 'g1', name: 'Pisach Meas', age: 26, languages: ['Khmer', 'English'], speciality: 'Marine & Diving', rating: 4.9, reviews: 43, price: 35, image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400', bio: 'Certified divemaster who has explored every reef around Koh Rong.' },
    { id: 'g2', name: 'Sreyla Touch', age: 23, languages: ['Khmer', 'English'], speciality: 'Island Life & Nature', rating: 4.7, reviews: 27, price: 22, image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400', bio: 'Island girl at heart, knows all the hidden beaches and jungle trails.' },
  ],
};

export const homestays = [
  { id: 'h1', locationId: 'angkor-borei', name: 'Chan Family Homestay', host: 'The Chan Family', pricePerNight: 18, maxGuests: 4, description: 'Traditional Khmer wooden house on stilts surrounded by rice paddies. Home-cooked breakfasts included.', amenities: ['Breakfast', 'Fan', 'Mosquito net', 'Bicycle'], image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800', rating: 4.8 },
  { id: 'h2', locationId: 'prek-toal', name: 'Floating Dream House', host: 'Ly Family', pricePerNight: 22, maxGuests: 2, description: 'Unique experience staying on a floating house with panoramic lake views. Fishing trips available at dawn.', amenities: ['Breakfast', 'Fan', 'Life jackets', 'Fishing equipment'], image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800', rating: 4.9 },
  { id: 'h3', locationId: 'kampot-riverside', name: 'Pepper Farm Bungalow', host: 'Vin Family', pricePerNight: 35, maxGuests: 3, description: 'Charming bungalow on an active pepper farm. Wake up to river views and farm-fresh meals.', amenities: ['Breakfast', 'Air conditioning', 'Farm tour', 'Hammock'], image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800', rating: 4.7 },
  { id: 'h4', locationId: 'battambang-village', name: 'Artisan Village Room', host: 'Keo Family', pricePerNight: 28, maxGuests: 4, description: 'Cozy rooms in a traditional arts village. Your hosts are local craftspeople who share their skills daily.', amenities: ['Breakfast', 'Fan', 'Art workshop', 'Bicycle'], image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800', rating: 4.6 },
  { id: 'h5', locationId: 'koh-rong', name: 'Beach Hut Paradise', host: 'Meas Family', pricePerNight: 45, maxGuests: 2, description: 'Eco-friendly bamboo hut steps from a pristine beach. Solar-powered with composting toilets.', amenities: ['Breakfast', 'Fan', 'Snorkel gear', 'Beach towels'], image: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=800', rating: 5.0 },
  { id: 'h6', locationId: 'kampot-riverside', name: 'River Garden Villa', host: 'Heng Family', pricePerNight: 55, maxGuests: 6, description: 'Spacious garden villa overlooking the Kampot River. Perfect for groups and families.', amenities: ['Breakfast', 'Air conditioning', 'Pool', 'Kayaks', 'BBQ'], image: 'https://images.pexels.com/photos/2294331/pexels-photo-2294331.jpeg?auto=compress&cs=tinysrgb&w=800', rating: 4.9 },
];

export const markerIcons = {
  restaurant: { emoji: '🍜', color: '#e07b39', label: 'Restaurant' },
  toilet: { emoji: '🚻', color: '#5b8db8', label: 'Toilet' },
  homestay: { emoji: '🏡', color: '#4a9e6b', label: 'Homestay' },
  business: { emoji: '🏪', color: '#c9903d', label: 'Business' },
};
