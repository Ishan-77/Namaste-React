import React from "react";
import ReactDOM from "react-dom/client";

/* 

<div id="parent">
  <div id=child>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id=child2>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>


*/

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Namaste React"),
//     React.createElement("h2", {}, "I'm h2 Tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm h1 Tag"),
//     React.createElement("h2", {}, "I'm h2 Tag"),
//   ]),
// ]);

//console.log(parent); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/*
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
//console.log(heading); // this will return object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // takes object and converts to heading tag and puts in the DOM
*/

///////////////////////EPISODE-3///////////////////////////////////////////////////////////

// React Element => object => when we render on DOM then it becomes HTML element

// const heading = React.createElement(
//   // this is core react
//   "h1",
//   { id: "heading" },
//   "Namaste-React core!!"
// );
// //console.log(heading); // object

// root.render(heading);

//////////////JSX//////////////////////////

// JSX- HTML like syntax

// JSX is converted to React.createElement => JS object => upon rendering => HTML element

//const Heading = () => <h1 className="head">Namaste-React JSX</h1>; // functional comp
//const heading = <h1 className="head">Namaste React JSX react element </h1>; // this is react element

//console.log(heading); // also a object

// REACT FUNCTIONAL COMPONENT

// component composition: <Heading/> component dusre component ke andar hai(line 77)

// const HeadingComponent = () => (
//   <div id="container">
//     <Heading />
//     <h1 className="heading">Namaste-React Functional Component</h1>
//   </div>
// );

//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading); // jsx(transpiled before reaches JS engine) -> done by Parcel with help of Babel

// now if we wanna render the functional component
//root.render(HeadingComponent); // not possible -> error

//root.render(<HeadingComponent />); // this will work

///                         ASSIGNMENT-3                //////// /////////////

// 1-Nested header element

// const headel = React.createElement("div", {}, [
//   React.createElement("h1", { class: "title" }, "h1 tag"),
//   React.createElement("h2", { class: "title" }, "h2 tag"),
//   React.createElement("h3", { class: "title" }, "h3 tag"),
// ]);

// 2- // using JSX

// const headEl = (
//   <div>
//     <h1 className="title">this is h1</h1>
//     <h2 className="title">this is h2</h2>
//     <h3 className="title">this is h3</h3>
//   </div>
// );

// 3- // functional component

// const Head = () => {
//   return (
//     <div>
//       <h1 className="title">H1</h1>
//       <h2 className="title">H2</h2>
//       <h3 className="title">H3</h3>
//     </div>
//   );
// };

// OR

// const Head = () => (
//   <div>
//     <h1 className="title">H1</h1>
//     <h2 className="title">H2</h2>
//     <h3 className="title">H3</h3>
//   </div>
// );

//4

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const StyleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  //console.log(props); // object
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, avgRating, cuisines } =
    resData?.info; // optional chaining && destructuring
  return (
    <div className="res-card" style={StyleCard}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h5> {cuisines.join(",")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} Rating</h5>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "338648",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Chandaka Industrial Area",
      areaName: "Patia",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "14 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 00:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-chandaka-industrial-area-patia-bhubaneswar-338648",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "74477",
      name: "Domino's Pizza",
      cloudinaryImageId: "bjev1c4v6q08zo97ticu",
      locality: "Chandrasekharpur",
      areaName: "Patia",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      parentId: "2456",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 00:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-chandrasekharpur-patia-bhubaneswar-74477",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "92292",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "KIIT Square",
      areaName: "Patia Village",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.5,
      parentId: "166",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-kiit-square-patia-village-bhubaneswar-92292",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "408175",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Chandaka Industrial Area",
      areaName: "Patia",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-chandaka-industrial-area-patia-bhubaneswar-408175",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "244438",
      name: "Wow! Momo",
      cloudinaryImageId: "5a148e63e9c54942e37627da1aa156be",
      locality: "Infocity Squre",
      areaName: "Patia",
      costForTwo: "₹300 for two",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "1776",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wow-momo-infocity-squre-patia-bhubaneswar-244438",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "103530",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "Magnetic Chhak",
      areaName: "Patia",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-23 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-magnetic-chhak-patia-bhubaneswar-103530",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "72589",
      name: "Jugaad Jn",
      cloudinaryImageId: "fq1uss75jajmt1oueyla",
      locality: "Kiit Road",
      areaName: "Patia",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Snacks", "Beverages", "Desserts", "Sweets"],
      avgRating: 4.4,
      veg: true,
      parentId: "9963",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-23 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/jugaad-jn-kiit-road-patia-bhubaneswar-72589",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "115576",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "KIIT Square",
      areaName: "Patia",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 13,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "13 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-kiit-square-patia-bhubaneswar-115576",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "187738",
      name: "hotel Toshali",
      cloudinaryImageId: "qhep96bo9cw7zskizcr0",
      locality: "It Park Road",
      areaName: "Patia",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Indian", "Thalis"],
      avgRating: 4.3,
      parentId: "103111",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-toshali-it-park-road-patia-bhubaneswar-187738",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "304248",
      name: "Cafe Coffee Day",
      cloudinaryImageId: "b70c7d23d197251b7b315b7e4d8173ae",
      locality: "Chandaka Industrial Estate",
      areaName: "Chandrasekharpur",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food",
      ],
      avgRating: 4.2,
      parentId: "1",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-23 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cafe-coffee-day-chandaka-industrial-estate-chandrasekharpur-bhubaneswar-304248",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "71210",
      name: "Hot Chilly Fast Food & Restaurant",
      cloudinaryImageId: "mvohgoovez9vuuuwacgq",
      locality: "Magnetic Chowk",
      areaName: "KIIT Square ",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Biryani",
        "Kebabs",
        "Fast Food",
        "Indian",
      ],
      avgRating: 4.1,
      parentId: "453356",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-23 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      select: true,
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hot-chilly-fast-food-and-restaurant-magnetic-chowk-kiit-square-bhubaneswar-71210",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "87002",
      name: "Keventers - Milkshakes & Desserts",
      cloudinaryImageId: "89707df532fd993b3d79a1a28038a901",
      locality: "Aryapalli",
      areaName: "Patia",
      costForTwo: "₹200 for two",
      cuisines: ["Beverages", "Ice Cream", "Desserts", "Healthy Food"],
      avgRating: 4.5,
      veg: true,
      parentId: "268997",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "14 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-aryapalli-patia-bhubaneswar-87002",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "71131",
      name: "Biriyani Box",
      cloudinaryImageId: "qmr0hzgrzn59dkddkpvj",
      locality: "Patia",
      areaName: "Patia",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Kebabs", "Desserts", "Indian"],
      avgRating: 4.3,
      parentId: "7279",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "16 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-23 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/biriyani-box-patia-bhubaneswar-71131",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "71240",
      name: "Sardar Ji Restaurant",
      cloudinaryImageId: "vtesuhqod65dcc2iyz2a",
      locality: "Kiit Road",
      areaName: "Patia",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "North Indian", "Biryani"],
      avgRating: 4.3,
      parentId: "178251",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sardar-ji-restaurant-kiit-road-patia-bhubaneswar-71240",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "126295",
      name: "UBQ by Barbeque Nation",
      cloudinaryImageId: "dipwfklhiogbgcnoa0vj",
      locality: "Gajapathi Nagar",
      areaName: "Chandrasekharpur",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 4.1,
      parentId: "10804",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-23 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-gajapathi-nagar-chandrasekharpur-bhubaneswar-126295",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "96571",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Chindimata Colony",
      areaName: "Sahid Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 10.7,
        serviceability: "SERVICEABLE",
        slaString: "55 mins",
        lastMileTravelString: "10.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-23 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-chindimata-colony-sahid-nagar-bhubaneswar-96571",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "74269",
      name: "GreenChillyz",
      cloudinaryImageId: "gcquif3ytdij3xikweyr",
      locality: "Infocity Road",
      areaName: "Patia",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Chinese"],
      avgRating: 4.3,
      parentId: "399293",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-23 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/greenchillyz-infocity-road-patia-bhubaneswar-74269",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "237586",
      name: "FreshBox",
      cloudinaryImageId: "hetgepazucywarpwk9mj",
      locality: "Mother Complex",
      areaName: "Patia",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "Indian",
        "Tandoor",
        "Chinese",
        "Mughlai",
        "Beverages",
        "Desserts",
        "Tibetan",
      ],
      avgRating: 4.3,
      parentId: "83933",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-23 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/freshbox-mother-complex-patia-bhubaneswar-237586",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "78383",
      name: "Biggies Burger",
      cloudinaryImageId: "49d60c8b2a966219918f28a6ffe15d05",
      locality: "Infocity Road",
      areaName: "Patia",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Fast Food", "Beverages"],
      avgRating: 4.4,
      parentId: "45723",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-24 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/biggies-burger-infocity-road-patia-bhubaneswar-78383",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "262280",
      name: "Biryani By Kilo",
      cloudinaryImageId: "bf9be1c6b9d796850f426281559cb2d2",
      locality: "Prachi Enclave Road",
      areaName: "Chandrasekharpur",
      costForTwo: "₹499 for two",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 4.3,
      parentId: "130",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "49 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-23 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/biryani-by-kilo-prachi-enclave-road-chandrasekharpur-bhubaneswar-262280",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
