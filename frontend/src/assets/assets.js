import basket_icon from './basket_icon.png'
import LOGO from './LOGO.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'

import tool1 from './tool1.png'
import tool2 from './tool2.png'
import tool3 from './tool3.png'
import tool4 from './tool4.png'
import tool5 from './tool5.png'
import tool6 from './tool6.png'
import tool7 from './tool7.png'
import tool8 from './tool8.png'

import seed1 from './seed1.png'
import seed2 from './seed2.png'
import seed3 from './seed3.png'
import seed4 from './seed4.png'
import seed5 from './seed5.png'
import seed6 from './seed6.png'
import seed7 from './seed7.png'
import seed8 from './seed8.png'

import fert1 from './fert1.png'
import fert2 from './fert2.png'
import fert3 from './fert3.png'
import fert4 from './fert4.png'
import fert5 from './fert5.png'
import fert6 from './fert6.png'
import fert7 from './fert7.png'

import iot from './iot.png'
import iot2 from './iot2.png'
import iot3 from './iot3.png'
import iot4 from './iot4.png'
import iot5 from './iot5.png'
import iot6 from './iot6.png'

import access1 from './access1.png'
import access2 from './access2.png'
import access3 from './access3.png'


import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
  LOGO,
  basket_icon,
  header_img,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon
}

export const menu_list = [
  {
    menu_name: "Tools",
    menu_image: menu_1
  },
  {
    menu_name: "Seeds",
    menu_image: menu_2
  },
  {
    menu_name: "Fertilizers",
    menu_image: menu_3
  },
  {
    menu_name: "Smart Farming",
    menu_image: menu_4
  },
  {
    menu_name: "Accessories",
    menu_image: menu_5
  }
]

export const agro_list = [
  // 🧰 TOOLS
  {
    _id: "1",
    name: "Hand Cultivator",
    image: tool1,
    price: 499,
    description: "Loosens soil and removes weeds",
    category: "Tools"
  },
  {
    _id: "2",
    name: "Garden Hoe",
    image: tool2,
    price: 699,
    description: "Used for digging and weeding",
    category: "Tools"
  },
  {
    _id: "3",
    name: "Spray Pump",
    image: tool3,
    price: 1499,
    description: "Spray fertilizers and pesticides",
    category: "Tools"
  },
  {
    _id: "4",
    name: "Pesticide Sprayer",
    image: tool4,
    price: 1799,
    description: "Controls insects and pests",
    category: "Tools"
  },
  {
    _id: "5",
    name: "Drip Irrigation Kit",
    image: tool5,
    price: 2999,
    description: "Saves water and increases yield",
    category: "Tools"
  },
  {
    _id: "6",
    name: "Sprinkler System",
    image: tool6,
    price: 3999,
    description: "Uniform irrigation system",
    category: "Tools"
  },
  {
    _id: "7",
    name: "Tractor Tool Kit",
    image: tool7,
    price: 3499,
    description: "Essential tractor tools",
    category: "Tools"
  },
  {
    _id: "8",
    name: "Compost Machine",
    image: tool8,
    price: 4999,
    description: "Converts waste into fertilizer",
    category: "Tools"
  },

  // 🌱 SEEDS
  {
    _id: "9",
    name: "Tomato Seeds",
    image: seed1,
    price: 199,
    description: "High yield tomato seeds",
    category: "Seeds"
  },
  {
    _id: "10",
    name: "Wheat Seeds",
    image: seed2,
    price: 299,
    description: "Premium wheat seeds",
    category: "Seeds"
  },
  {
    _id: "11",
    name: "Rice Seeds",
    image: seed3,
    price: 349,
    description: "High quality rice seeds",
    category: "Seeds"
  },
  {
    _id: "12",
    name: "Corn Seeds",
    image: seed4,
    price: 249,
    description: "Hybrid corn seeds",
    category: "Seeds"
  },
  {
    _id: "13",
    name: "Onion Seeds",
    image: seed5,
    price: 199,
    description: "Fast growing onions",
    category: "Seeds"
  },
  {
    _id: "14",
    name: "Chilli Seeds",
    image: seed6,
    price: 149,
    description: "Spicy chilli seeds",
    category: "Seeds"
  },
  {
    _id: "15",
    name: "Vegetable Seeds Pack",
    image: seed7,
    price: 399,
    description: "Mixed vegetable seeds",
    category: "Seeds"
  },
  {
    _id: "16",
    name: "Hybrid Seeds",
    image: seed8,
    price: 499,
    description: "High yield hybrid seeds",
    category: "Seeds"
  },

  // 🧪 FERTILIZERS
  {
    _id: "17",
    name: "Organic Fertilizer",
    image: fert1,
    price: 499,
    description: "Eco friendly fertilizer",
    category: "Fertilizers"
  },
  {
    _id: "18",
    name: "Vermicompost",
    image: fert2,
    price: 399,
    description: "Natural soil booster",
    category: "Fertilizers"
  },
  {
    _id: "19",
    name: "Potash Fertilizer",
    image: fert3,
    price: 699,
    description: "Improves crop strength",
    category: "Fertilizers"
  },
  {
    _id: "20",
    name: "Nitrogen Fertilizer",
    image: fert4,
    price: 799,
    description: "Boosts plant growth",
    category: "Fertilizers"
  },
  {
    _id: "21",
    name: "Soil Testing Kit",
    image: fert5,
    price: 1599,
    description: "Test soil nutrients",
    category: "Fertilizers"
  },
  {
    _id: "22",
    name: "Bio Compost",
    image: fert6,
    price: 349,
    description: "Organic compost",
    category: "Fertilizers"
  },
  {
    _id: "23",
    name: "Organic Pesticide",
    image: fert7,
    price: 499,
    description: "Kills pests naturally",
    category: "Fertilizers"
  },

  // 📡 SMART FARMING (IoT)
  {
    _id: "24",
    name: "Soil Moisture Sensor",
    image: iot,
    price: 1999,
    description: "Measures soil moisture",
    category: "Smart Farming"
  },
  {
    _id: "25",
    name: "Weather Station",
    image: iot2,
    price: 6999,
    description: "Tracks farm weather",
    category: "Smart Farming"
  },
  {
    _id: "26",
    name: "Farm Drone",
    image: iot3,
    price: 29999,
    description: "Aerial crop monitoring",
    category: "Smart Farming"
  },
  {
    _id: "27",
    name: "Crop Camera",
    image: iot4,
    price: 5999,
    description: "Live crop monitoring",
    category: "Smart Farming"
  },
  {
    _id: "28",
    name: "Smart Irrigation Controller",
    image: iot5,
    price: 4999,
    description: "Automated watering",
    category: "Smart Farming"
  },
  {
    _id: "29",
    name: "Plant Growth Sensor",
    image: iot6,
    price: 2499,
    description: "Tracks plant health",
    category: "Smart Farming"
  },

  // 🧤 ACCESSORIES
  {
    _id: "30",
    name: "Greenhouse Sheet",
    image: access1,
    price: 1999,
    description: "Protects crops",
    category: "Accessories"
  },
  {
    _id: "31",
    name: "Grow Light",
    image: access2,
    price: 2499,
    description: "Artificial sunlight",
    category: "Accessories"
  },
  {
    _id: "32",
    name: "Farming Gloves",
    image: access3,
    price: 299,
    description: "Protect hands",
    category: "Accessories"
  }
]
