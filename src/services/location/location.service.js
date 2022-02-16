import { locations } from "./location.mock";
import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("Not found");
    }
    resolve(locationMock);
  });
};

export const locationDataTransform = (result) => {
  const { geometry = {} } = camelize(result.results)[0];
  const { lat, lang } = geometry.location;

  return { lat, lang };
};
