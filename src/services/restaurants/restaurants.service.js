import { mocks } from "./mock";
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

const restaurantdataTransform = ({ results = [] }) => {
  const mappedresults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.bussines_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedresults);
};
