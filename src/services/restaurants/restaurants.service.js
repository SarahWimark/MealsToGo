import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not found");
    }
    resolve(mock);
  });
};

export const restaurantDataTransform = ({ results = [] }) => {
  const mappedresults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.bussines_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedresults);
};
