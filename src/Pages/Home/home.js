import { Box } from "@material-ui/core";
import CountryCards from "../../Components/CountriesData/countriesCards";
import SearchAndFilter from "../../Components/filterAndSearch/filterAndSearch";

const Home = () => {
  return (
    <>
      <Box>
        <SearchAndFilter />
        <CountryCards />
      </Box>
    </>
  );
};

export default Home;
