import { Box, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { searchCountry } from "../../Features/Slicers/allCountrySlicer";
import { getAllCountries } from "../../Features/Actions/getAllContries";

const Search = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <>
      <Box className={classes.searchMain}>
        <Box>
          <SearchIcon className={classes.searchIcon} />
        </Box>
        <Box>
          <input
            type="text"
            className={classes.searchInput}
            onChange={(e) => {
              console.log(e.target.value);
              if (e.target.value === "") {
                dispatch(getAllCountries());
              } else {
                dispatch(searchCountry(e.target.value));
              }
            }}
          />
        </Box>
      </Box>
    </>
  );
};
export default Search;

const useStyles = makeStyles((theme) => ({
  searchMain: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    outline: "none",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    backgroundColor: "#fff",
    width: "350px",
    height: "40px",
    borderRadius: "8px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
  searchIcon: {
    display: "flex",
    paddingLeft: "12px",
  },
  searchInput: {
    outline: "none",
    border: "none",
    width: "230px",
    height: "35px",
    paddingLeft: "12px",
  },
}));
