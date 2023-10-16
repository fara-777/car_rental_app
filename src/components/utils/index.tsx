import { colors } from "../constants";

const headers = {
  "X-RapidAPI-Key": "f576273367msh2c7c39b4584137ap1384ffjsn79ed6dc0e38f",
  "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
};

interface fetchParams {
  make?: string;
  model?: string;
  limit?: string;
  year?: string;
  fuel?: string;
}
// api'den araba verilerini alir
export async function fetchCars(filters: fetchParams) {
  const { make, model = "", limit = "5", year = "", fuel = "" } = filters;
  const res = await fetch(
    ` https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
    { headers }
  );

  const data = await res.json();
  return data;
}

// resim olusturma
export const generateImage = (car: any, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("angle", String(angle));

  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[i]);

  return String(url);
};
