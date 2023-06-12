import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_API_KEY,
});




const getUrlForCoffeeStores = (latLong, query, limit) =>{
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&radius=100000&limit=${limit}`
};

const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: 'coffee shop',
    page: 1,
    perPage: 32,
    orientation: 'squarish',
  });
  const unsplashResults = photos.response.results;

  return unsplashResults.map((result) => result.urls["small"]);

}

export const fetchCoffeeStores = async () => {
  const photos = await getListOfCoffeeStorePhotos();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.FOURSQUARE_API_KEY,
    }
  };
  const response = await fetch(getUrlForCoffeeStores("35.681039977324666%2C139.7669936264785", "%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC", 30 ), options)
  const data  = await response.json()
  return data.results.map((result, index) => {
    return {
      id: result.fsq_id,
      name: result.name,
      crossStreet: result.location.cross_street || "building not found",
      address: result.location.address,
      imgUrl: photos.length > 0 ? photos[index] : null,
    }
  })
    // .catch(err => console.error(err));
}