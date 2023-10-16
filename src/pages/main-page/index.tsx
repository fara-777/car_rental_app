import { useEffect, useState } from "react";
import Hero from "../../components/hero";
import { fetchCars } from "../../components/utils";
import { ICarProps } from "../../components/types";
import Card from "../../components/card";
import SearchBar from "../../components/search-bar";
import CustomFilters from "../../components/custom-filters";
import { useSearchParams } from "react-router-dom";
import ShowMore from "../../components/show-more";
import { fuels, years } from "../../components/constants";

interface IError {
  error?: string;
}

export default function MainPage() {
  const [cars, setCars] = useState<ICarProps[] | IError | null>(null);
  const [params, setParams] = useSearchParams();

  // If the "limit" parameter is present, get its value; otherwise, use 5 as the default limit
  const limit = Number(params.get("limit")) || 5;

  useEffect(() => {
    // Transfer search parameters from the URL to an object
    const paramsObj = Object.fromEntries(params.entries());

    fetchCars(paramsObj)
      .then((res: ICarProps[] | IError) => {
        if ("error" in res) {
          setCars(res);
        } else {
          setCars(res as ICarProps[]);
        }
      })
      .catch((err) => {
        console.error(err);
        setCars({ error: "An error occurred." });
      });
  }, [params]);

  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;

  return (
    <>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Discover cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilters title="Fuel Type" options={fuels} />
            <CustomFilters title="Year" options={years} />
          </div>
        </div>

        {isDataEmpty ? (
          <div className="home__error-container">
            <h2>Sorry, No Results Found</h2>
          </div>
        ) : (
          // If cars are available, display cards
          <>
            <section>
              <div className="home__cars-wrapper">
                {cars.map((car, i) => (
                  <Card car={car} key={i} />
                ))}
              </div>
              <ShowMore limit={limit} isNext={limit < 30} />
            </section>
          </>
        )}
      </div>
    </>
  );
}
