import { Box, makeStyles } from "@material-ui/core";
import { searchCountryByRegion } from "../../Features/Slicers/allCountrySlicer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = useState("all");

  return (
    <>
      <Box className={classes.filterMain}>
        <select
          id="countries"
          name="countries"
          className={classes.filterSelection}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onClick={() => {
            dispatch(searchCountryByRegion(value));
          }}
        >
          <option value="all" className={classes.filterOption}>
            Filter by Region
          </option>
          <option value="Africa" className={classes.filterOption}>
            Africa
          </option>
          <option value="America" className={classes.filterOption}>
            America
          </option>
          <option value="Asia" className={classes.filterOption}>
            Asia
          </option>
          <option value="Europe" className={classes.filterOption}>
            Europe
          </option>
          <option value="Oceania" className={classes.filterOption}>
            Oceania
          </option>
        </select>
      </Box>
    </>
  );
};

export default Filter;
const useStyles = makeStyles((theme) => ({
  filterMain: {
    border: "none",
  },
  filterSelection: {
    outline: "none",
    border: "none",
    width: "170px",
    height: "40px",
    backgroundColor: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    fontFamily: "Nunito, sans-serif",
    fontWeight: "bold",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
  filterOption: {
    backgroundColor: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    fontFamily: "Nunito, sans-serif",
    fontWeight: "bold",
  },
}));
