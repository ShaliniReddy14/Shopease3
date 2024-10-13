const locations = [
  {
    name: 'mens wear',
    rating: 3,
    facilities:['casual wear', 'cargo', 'jeans','shirts','trousers'],
  
  openingTimes: [

      { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', opening: '9:00am', closing: '4:00pm', closed: false }
    ],
    reviews: [
      { author: 'venkat', rating: 5, timestamp: '2013-07-16', reviewText: 'I recently shopped at Luxrary, and overall, I had a great experience. Here’s my breakdown: The quality of the products on the website is excellent. I ordered a jeans. The materials felt premium. The colors and patterns were true to what I saw online, which is always a good sign. I appreciated the attention to detail, especially with the condition it was delivered.' },
      { author: 'Sai', rating: 3, timestamp: '2013-06-16', reviewText: ' Sizing can be hit or miss with online shopping, but Luxurary had accurate size charts. The measurements listed for the products were spot on, and everything I ordered fit well. Their range of sizes is quite inclusive, catering to various body types, which is great. If youre unsure, the reviews and customer feedback on sizing are helpful..' }
    ],
    gmail : 'ShopEase@gmail.com',
    phno: '9492200234'
  },
  {
    name: "women's wear",
    rating: 4,
    facilities: ['Westen wear', 'Frocks', 'Shirts','T-Shirts','Party wear'],
    openingTimes: [

      { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', opening: '9:00am', closing: '4:00pm', closed: false }
    ],
    
    reviews: [
      { author: '    shalini    ', rating: 4, timestamp: '2013-07-20', reviewText: 'Here online ordering system is easy to use, and delivery is fast. I haven’t had any issues with orders, and their customer service is helpful.'},
      { author: '    vamshi    ', rating: 2, timestamp: '2013-06-25', reviewText: 'Good platform, but sometimes it feels understaffed. The lines can get long during peak hours.' }
    ],
    gmail : 'womenwear@gmail.com',
    phno: '9177449988'
  },
  {
    name: "men's wear",
    rating: 5,
    facilities: ['casual wear', 'suitsha Wear', 'Seasonal wear','100% pure cotton'],
    openingTimes: [

      { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', opening: '9:00am', closing: '4:00pm', closed: false }
    ],
   
    reviews: [
      { author: '   raha    ', rating: 5, timestamp: '2013-08-10', reviewText: 'Known for its durability and affordability, Carters offers a wide range of stylish and comfortable clothing. Many parents appreciate the cute designs and seasonal collections' },
      { author: '   Karthikeya   ', rating: 4, timestamp: '2013-08-15', reviewText: 'This platform provides trendy and fashionable options at reasonable prices. The materials are often soft, and the variety is extensive' }
    ],
    gmail : 'kidswear@gmail.com',
    phno: '91878906798'
  },
  {
    name: "Accessorie's",
    facilities: ['Bags', 'Belts', 'Watches','Jewelry'],
    openingTimes: [

      { days: 'Saturday', opening: '12:00pm', closing: '2:00pm', closed: false },
      { days: 'Sunday', opening: '12:00pm', closing: '2:00pm', closed: false }
    ],
    reviews: [
      { author: '     Rosy     ', rating: 4, timestamp: '2013-09-12', reviewText: "his iconic belt is a classic status symbol, adored for its luxurious look and craftsmanship. The H-shaped buckle and reversible design make it versatile for both formal and casual outfits. However, some reviews point out the high price and that the buckle can get scratched if not handled carefully." },
      { author: '   Koushik reddy      ', rating: 3, timestamp: '2013-09-18', reviewText: "This luxury watch is lauded for its sleek design, precise Swiss craftsmanship, and the blend of sporty and classic aesthetics. Reviews highlight its durability and status as a collectible. However, many point out that it's an investment, and servicing the watch over time can be costly." }
    ],
    gmail : 'well@gmail.com',
    phno: '9177499887'
  },
  {
    name: 'Electronics',
    rating: 3,
    facilities: ['Smart Home Gadgets', 'Audio gadgets', 'Gaming gadgets','Smart Phones'],
      openingTimes: [
        { days: 'Saturday', opening: '12:00pm', closing: '2:00pm', closed: false },
        { days: 'Sunday', opening: '12:00pm', closing: '2:00pm', closed: false }
      ],
    reviews: [
      { author: '      Sandeep reddy     ', rating: 3, timestamp: '2013-10-20', reviewText: 'Design, camera quality, battery life, performance, display quality, and software features..' },
      { author: '     vaishnav        ', rating: 4, timestamp: '2013-10-25', reviewText: 'Good prices on over-the-counter products. Sometimes they run out of stock on popular items, though.' }
    ],
    gmail : 'electronics123@gmail.com',
    phno: '9014770036'
  },
]
  


// Home List Route
const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'ShopEase- Shop..... Anytime, Anywhere',
    pageHeader: {
      title: 'ShopEase',
      strapline: 'SHOPEASE-Your one-stop destination for everything you love❤️...',
    },
    sidebar: "Searching for the great brand with best facilities? Our  ShopEase helps you find the best brands you needs...",
    locations: locations, // Use the locations array directly
  });
};

// Location Info Route
// Location Info Route
const locationInfo = (req, res) => {
  const locationName = req.params.name.replace(/-/g, ' ');
  const location = locations.find(loc => loc.name.toLowerCase() === locationName.toLowerCase());

  if (!location) {
    return res.status(404).send('Location not found');
  }

  res.render('location-info', {
    title: location.name,
    pageHeader: { title: location.name },
    sidebar: {
      context: `${location.name} Fashion is the armor to survive the reality of everyday life.`,
      callToAction: `To Contact Us:\nGmail: ${location.gmail}\nPhone: ${location.phno}`
    },
    location: location
  });
};



//Add Review Page
const addReview = (req, res) => {
  res.render('location-review-form', {
    title: 'Review on clothing experience',
    pageHeader: { title: 'Add Your Review' }
  });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
