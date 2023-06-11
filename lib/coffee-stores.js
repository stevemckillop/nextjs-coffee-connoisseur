const getUrlForCoffeeStores = (latLong, query, limit) =>{
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&radius=100000&limit=${limit}`
}

export const fetchCoffeeStores = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.FOURSQUARE_API_KEY,
    }
  };
  const response = await fetch(getUrlForCoffeeStores("35.681039977324666%2C139.7669936264785", "%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC", 32 ), options)
  const data  = await response.json()
  return data.results;
    // .catch(err => console.error(err));
}