export const locations = [
  {
    id: 'angkor-borei',
    name: 'Angkor Borei',
    region: 'Takéo Province',
    description: 'Ancient river town with millennia of Khmer history, floating villages and sacred pagodas.',
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&q=80',
    color: '#4a7c42',
    markers: [
      { id: 1, type: 'restaurant', name: 'Borei Kitchen', description: 'Traditional Khmer dishes, famous for amok', x: 30, y: 40 },
      { id: 2, type: 'homestay', name: 'River House', description: 'Stilted home on the Mekong, 2 rooms', x: 55, y: 30 },
      { id: 3, type: 'toilet', name: 'Public Facilities', description: 'Clean public restrooms near market', x: 70, y: 60 },
      { id: 4, type: 'business', name: 'Borei Crafts', description: 'Handwoven silks and lacquerware', x: 45, y: 65 },
    ]
  },
  {
    id: 'prek-toal',
    name: 'Prek Toal',
    region: 'Battambang Province',
    description: 'UNESCO-listed biosphere on Tonlé Sap, home to rare water birds and floating communities.',
    image: 'https://images.unsplash.com/photo-1540202403-b7abd6747a18?w=600&q=80',
    color: '#2d5a27',
    markers: [
      { id: 1, type: 'restaurant', name: 'Floating Kitchen', description: 'Fresh fish from the lake daily', x: 40, y: 45 },
      { id: 2, type: 'homestay', name: 'Lakeside Stay', description: 'Floating house, sunset views', x: 60, y: 35 },
      { id: 3, type: 'business', name: 'Bird Tours', description: 'Guided boat tours to bird sanctuary', x: 25, y: 60 },
      { id: 4, type: 'toilet', name: 'Community Facilities', description: 'Near the community center', x: 75, y: 55 },
    ]
  },
  {
    id: 'kampot-riverside',
    name: 'Kampot Riverside',
    region: 'Kampot Province',
    description: 'Colonial charm meets pepper plantations along the Preaek Tuek Chhu river.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80',
    color: '#c9a96e',
    markers: [
      { id: 1, type: 'restaurant', name: 'Pepper Garden Café', description: 'Kampot pepper-infused Khmer cuisine', x: 35, y: 50 },
      { id: 2, type: 'homestay', name: 'Colonial Villa', description: 'Restored French colonial home', x: 60, y: 40 },
      { id: 3, type: 'business', name: 'Kampot Pepper Co.', description: 'Farm tours and pepper tasting', x: 50, y: 70 },
      { id: 4, type: 'toilet', name: 'River Park Facilities', description: 'Next to the riverside park', x: 20, y: 35 },
    ]
  },
  {
    id: 'battambang-village',
    name: 'Battambang Village',
    region: 'Battambang Province',
    description: 'Bamboo train rides, traditional pottery and Cambodia\'s most charming provincial town.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    color: '#7ab573',
    markers: [
      { id: 1, type: 'restaurant', name: 'Village Table', description: 'Home-cooked meals by local families', x: 45, y: 40 },
      { id: 2, type: 'homestay', name: 'Bamboo House', description: 'Traditional bamboo architecture', x: 30, y: 55 },
      { id: 3, type: 'business', name: 'Pottery Workshop', description: 'Learn traditional Khmer pottery', x: 65, y: 35 },
      { id: 4, type: 'toilet', name: 'Market Facilities', description: 'Behind the morning market', x: 55, y: 70 },
    ]
  },
  {
    id: 'koh-rong',
    name: 'Koh Rong Community',
    region: 'Preah Sihanouk Province',
    description: 'Pristine island beaches with fishing communities, bioluminescent plankton bays.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    color: '#4a7c42',
    markers: [
      { id: 1, type: 'restaurant', name: 'Beach Shack', description: 'Grilled seafood on the sand', x: 40, y: 50 },
      { id: 2, type: 'homestay', name: 'Fisher\'s Rest', description: 'Beachfront bungalow, 3 rooms', x: 65, y: 35 },
      { id: 3, type: 'business', name: 'Snorkel Tours', description: 'Coral reef and plankton night tours', x: 25, y: 65 },
      { id: 4, type: 'toilet', name: 'Beach Facilities', description: 'Near the main pier', x: 70, y: 60 },
    ]
  },
];

export const activities = {
  'angkor-borei': [
    { id: 'ab1', name: 'Ancient Temple Walk', description: 'Guided walk through pre-Angkor ruins with a local historian.', price: 18, duration: '3 hrs', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80' },
    { id: 'ab2', name: 'River Boat Sunrise', description: 'Drift along the Mekong as the sun rises over the ancient city.', price: 12, duration: '2 hrs', image: 'https://images.unsplash.com/photo-1540202403-b7abd6747a18?w=400&q=80' },
    { id: 'ab3', name: 'Silk Weaving Class', description: 'Learn traditional Khmer silk weaving from master weavers.', price: 25, duration: '4 hrs', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  ],
  'prek-toal': [
    { id: 'pt1', name: 'Bird Sanctuary Tour', description: 'Boat into the UNESCO biosphere to spot rare waterbirds.', price: 22, duration: '4 hrs', image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&q=80' },
    { id: 'pt2', name: 'Fishing with Locals', description: 'Join a fishing family for a morning on Tonlé Sap.', price: 15, duration: '3 hrs', image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400&q=80' },
  ],
  'kampot-riverside': [
    { id: 'kr1', name: 'Pepper Farm Tour', description: 'Walk the famous Kampot pepper plantations, taste and learn.', price: 20, duration: '3 hrs', image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400&q=80' },
    { id: 'kr2', name: 'Kayak the River', description: 'Paddle past mangroves and villages on the Preaek Tuek Chhu.', price: 16, duration: '3 hrs', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80' },
    { id: 'kr3', name: 'Night Market Food Tour', description: 'Street food crawl through Kampot\'s evening market.', price: 14, duration: '2 hrs', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&q=80' },
  ],
  'battambang-village': [
    { id: 'bv1', name: 'Bamboo Train Ride', description: 'Ride the legendary nori on original bamboo rail tracks.', price: 10, duration: '2 hrs', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
    { id: 'bv2', name: 'Pottery Workshop', description: 'Throw clay pots with masters who carry 800 years of tradition.', price: 28, duration: '4 hrs', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  ],
  'koh-rong': [
    { id: 'ko1', name: 'Bioluminescent Night Swim', description: 'Wade into glowing plankton bays after dark.', price: 18, duration: '2 hrs', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80' },
    { id: 'ko2', name: 'Snorkeling with Fisher Guide', description: 'Explore coral reefs with a local fishing family.', price: 24, duration: '4 hrs', image: 'https://images.unsplash.com/photo-1540202403-b7abd6747a18?w=400&q=80' },
  ],
};

export const guides = {
  'angkor-borei': [
    { id: 'g1', name: 'Sovann Pich', specialty: 'History & Archaeology', rating: 4.9, price: 35, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', bio: '15 years guiding at pre-Angkor sites. Expert in ancient Khmer script.' },
    { id: 'g2', name: 'Chanda Meas', specialty: 'River & Nature', rating: 4.7, price: 28, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', bio: 'Grew up on the Mekong. Knows every village and waterway by heart.' },
  ],
  'prek-toal': [
    { id: 'g3', name: 'Dara Keo', specialty: 'Birdwatching', rating: 5.0, price: 40, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', bio: 'Trained ornithologist. Can identify 200+ bird species by call.' },
  ],
  'kampot-riverside': [
    { id: 'g4', name: 'Sreymom Heng', specialty: 'Culinary & Culture', rating: 4.8, price: 30, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', bio: 'Chef and food historian. Third-generation pepper farmer family.' },
    { id: 'g5', name: 'Visal Chhun', specialty: 'Adventure & Outdoors', rating: 4.6, price: 25, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', bio: 'Rock climber and kayaker. Knows the secret swimming holes.' },
  ],
  'battambang-village': [
    { id: 'g6', name: 'Bopha Nhem', specialty: 'Arts & Crafts', rating: 4.9, price: 32, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', bio: 'Traditional dancer and craft teacher. UNESCO cultural ambassador.' },
  ],
  'koh-rong': [
    { id: 'g7', name: 'Makara Sok', specialty: 'Marine & Fishing', rating: 4.8, price: 35, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', bio: 'Third-generation fisherman. Expert in sustainable reef ecosystems.' },
  ],
};

export const homestays = [
  { id: 'h1', locationId: 'angkor-borei', name: 'Mekong River House', location: 'Angkor Borei', price: 22, capacity: 4, description: 'Raised wooden home on stilts above the Mekong. Wake to river mist and birdsong.', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80', amenities: ['Breakfast', 'Wifi', 'Fan', 'Shared Bath'] },
  { id: 'h2', locationId: 'prek-toal', name: 'Floating Lodge', location: 'Prek Toal', price: 35, capacity: 2, description: 'Sleep on the water in a beautifully maintained floating house. Pure silence.', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80', amenities: ['Breakfast', 'Boat Transfer', 'A/C', 'Private Bath'] },
  { id: 'h3', locationId: 'kampot-riverside', name: 'Colonial Garden Stay', location: 'Kampot Riverside', price: 28, capacity: 3, description: 'Restored colonial house surrounded by pepper vines and tropical gardens.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80', amenities: ['Breakfast', 'Garden', 'A/C', 'Private Bath'] },
  { id: 'h4', locationId: 'battambang-village', name: 'Bamboo Farmstay', location: 'Battambang', price: 18, capacity: 4, description: 'Stay with a farming family in a traditional bamboo home. Meals included.', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&q=80', amenities: ['All Meals', 'Farm Tour', 'Fan', 'Shared Bath'] },
  { id: 'h5', locationId: 'koh-rong', name: 'Beachfront Bungalow', location: 'Koh Rong', price: 45, capacity: 2, description: 'Simple paradise — white sand, clear water, and a fishing family next door.', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', amenities: ['Breakfast', 'Beach Access', 'Fan', 'Private Bath'] },
];
