import {} from "react";
import "./Country.css";

const Country = ({ country }) => {
  console.log(country);
  const {
    area,
    capital,
    continents,
    flags,
    languages,
    maps,
    name,
    population,
    region,
    timezones,
  } = country;
  return (
    <div>
      {/* <h3>name: {country.name.common} </h3> */}

      <div>
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img className="w-50 h-40" src={flags.png} alt="Flag" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{name.common}</h2>
            <p>Area : {area}</p>
            <p>Region : {region}</p>
            <p>Capital : {capital}</p>
            <p>Continents : {continents}</p>
            <p>Languages : {languages?.eng}</p>
            <p>Population : {population}</p>
            <p>Timezones : {timezones[0]}</p>

            <div className="card-actions justify-center">
              <button className="btn  px-6">Visit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
