import { View, Text } from "react-native";
import React from "react";

const SpecialDatas = [
  {
    userId: 39,
    id: 39,
    title: "Sangeeth Management",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://cdn.britannica.com/48/12548-004-68A15563/Cucumber.jpg?w=690&h=388&c=crop",
  },
  {
    userId: 40,
    id: 40,
    title: "Wedding Planners",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2124278633/display_1500/stock-photo-female-wedding-planner-discussing-ceremony-with-clients-in-office-2124278633.jpg",
  },
  {
    userId: 41,
    id: 41,
    title: "Wedding Saress",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/666765781/display_1500/stock-photo-colorful-indian-pattern-fabrics-are-folding-for-sale-in-thailand-market-666765781.jpg",
  },
  {
    userId: 42,
    id: 42,
    title: "Engagement rings",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1023588436/display_1500/stock-photo-diamond-engagement-ring-isolated-in-box-1023588436.jpg",
  },
  {
    userId: 52,
    id: 52,
    title: "Javvu Mittai",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1279292518/display_1500/stock-photo-traditional-candy-javvu-mittai-1279292518.jpg",
  },
  {
    userId: 53,
    id: 53,
    title: "Bangles Distribution",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://cdn.britannica.com/48/12548-004-68A15563/Cucumber.jpg?w=690&h=388&c=crop",
  },
  {
    userId: 54,
    id: 54,
    title: "Wedding Petti Shop",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2110358366/display_1500/stock-photo-happy-valentine-s-day-white-podium-or-stage-with-metallic-pink-heart-shaped-balloon-on-pastel-pink-2110358366.jpg",
  },
  {
    userId: 55,
    id: 55,
    title: "Groom & Brige Pallakku Palki",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://cdn.britannica.com/48/12548-004-68A15563/Cucumber.jpg?w=690&h=388&c=crop",
  },
  {
    userId: 56,
    id: 56,
    title: "Aarathi Plates For Wedding",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2057518436/display_1500/stock-vector-traditional-puja-thali-plate-for-ritual-ceremony-with-kumkum-haldi-or-turmeric-powder-flowers-2057518436.jpg",
  },
  {
    userId: 57,
    id: 57,
    title: "Thamboolam Bags",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/570601132/display_1500/stock-photo-white-bag-570601132.jpg",
  },
  {
    userId: 58,
    id: 58,
    title: "Micky Mouse Chutki Bheem Doraemon",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1353063704/display_1500/stock-photo-bangkok-thailand-march-mickey-mouse-and-minnie-mouse-dolls-that-are-popular-around-1353063704.jpg",
  },
  {
    userId: 59,
    id: 59,
    title: "Welcome Girls For Wedding",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1774850771/display_1500/stock-photo-portrait-of-a-beautiful-indian-girl-in-a-greetting-pose-to-namaste-hands-india-woman-in-1774850771.jpg",
  },
  {
    userId: 60,
    id: 60,
    title: "Gym Boys and Bouncers For Wedding",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1070648714/display_1500/stock-photo-june-bar-security-aka-bouncers-wait-at-the-bar-door-in-bostanci-istanbul-1070648714.jpg",
  },
  {
    userId: 63,
    id: 63,
    title: "panju mittai stall for Wedding Party",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1429331888/display_1500/stock-photo-street-vendor-selling-cotton-candy-or-bombay-mithai-or-panju-mittai-sweet-in-indian-near-vidhana-1429331888.jpg",
  },
  {
    userId: 70,
    id: 70,
    title: "Footstall & Kids Zone",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1844855788/display_1500/stock-photo--meat-is-ready-and-some-workers-waiting-for-place-to-seat-in-food-stall-at-1844855788.jpg",
  },
  {
    userId: 71,
    id: 71,
    title: "Popcorn & Candy Chocolate",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/629135168/display_1500/stock-photo-assortment-of-unhealthy-snacks-diet-or-weight-control-concept-space-for-text-629135168.jpg",
  },
  {
    userId: 72,
    id: 72,
    title: "Beeda Cut Fruite",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1470028808/display_1500/stock-photo-montcuq-france-july-shoppers-buying-fresh-fruit-and-vegetables-in-a-french-street-market-1470028808.jpg",
  },
  {
    userId: 73,
    id: 73,
    title: "Jojo Hammer",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://cdn.britannica.com/48/12548-004-68A15563/Cucumber.jpg?w=690&h=388&c=crop",
  },
  {
    userId: 74,
    id: 74,
    title: "Mirror Booth",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1685948776/display_1500/stock-photo-interior-elegant-luxury-wedding-decoration-photo-zone-photo-booth-with-flowers-in-glass-vases-1685948776.jpg",
  },
  {
    userId: 75,
    id: 75,
    title: "Ballon Shooting",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1736973551/display_1500/stock-photo-gurgaon-haryana-india-march-undefined-men-shoots-from-an-air-rifle-unidentified-guy-1736973551.jpg",
  },
  {
    userId: 76,
    id: 76,
    title: "Bouncing Castle",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/728130715/display_1500/stock-photo-friends-jumping-on-bouncy-castle-at-playground-728130715.jpg",
  },
  {
    userId: 77,
    id: 77,
    title: "Bull Ride",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/236197789/display_1500/stock-photo-ride-of-the-bull-in-park-amusement-236197789.jpg",
  },
  {
    userId: 78,
    id: 78,
    title: "Train Ride",
    rating: "4.5(60)",
    amound: "499",
    body: "Famous Designer",
    image:
      "https://www.shutterstock.com/shutterstock/photos/766899847/display_1500/stock-photo-yukon-train-ride-landskape-766899847.jpg",
  },
];

export default SpecialDatas;
