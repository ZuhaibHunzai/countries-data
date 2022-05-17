import { Box, makeStyles } from "@material-ui/core";
import AllCountriesData from "../AllCountriesData/allCountriesData";
import Filter from "../filter/filter";
import Search from "../search/search";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.homeMain}>
        <Box className={classes.searchAndFilter}>
          <Box className={classes.search}>
            <Search />
          </Box>
          <Box className={classes.filter}>
            <Filter />
          </Box>
        </Box>
        <Box className={classes.mappedCards}>
          <AllCountriesData />
        </Box>
      </Box>
    </>
  );
};
export default Home;

const useStyles = makeStyles((theme) => ({
  search: {
    marginLeft: "100px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
  filter: {
    marginRight: "100px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
    },
  },
  homeMain: {
    fontFamily: "Nunito, sans-serif",
    fontWeight: "bold",
  },
  searchAndFilter: {
    width: "100%",
    height: "14vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
}));
