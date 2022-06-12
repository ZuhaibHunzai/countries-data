import { Box, makeStyles } from "@material-ui/core";
import { getAllCountries } from "../../Features/Actions/getAllContries";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useNavigate } from "react-router-dom";
import { getCountrydetails } from "../../Features/Actions/getCountryDetails";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../Features/Slicers/addFavorites";

const AllCountriesData = () => {
  const [like, disLike] = useState(false);
  const navigate = useNavigate();
  const handleNavigation = (country) => {
    navigate(`country/${country}`);
  };

  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    getAllCountriesSlicer: {
      allCountryData,
      filteredRegions,
      allCountriesLoading,
    },
    addFavorites: { favorites, hasChoosedCountry, hasRemovedCountry },
  } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllCountries());
  }, []);
  return (
    <>
      <Box>
        <Box className={classes.mappedCards}>
          <Box>
            <Box>
              {allCountriesLoading ? (
                <Box style={{ marginTop: "200px" }}>
                  <CircularProgress />
                </Box>
              ) : (
                <Box className={classes.cardContainer}>
                  <Box className={classes.cardWrapper}>
                    {filteredRegions.slice(0, 28).map((con, index) => {
                      return (
                        <>
                          <Box className={classes.cardMain} key={index}>
                            <Box>
                              <img
                                className={classes.cardImg}
                                src={con.flag}
                                alt="flag"
                                onClick={() => handleNavigation(con.name)}
                              />
                            </Box>
                            <Box className={classes.cardName}>
                              <Box>
                                <h2>{con.name}</h2>
                              </Box>
                              <Box>
                                {!hasChoosedCountry ? (
                                  <FavoriteBorderIcon
                                    key={index}
                                    className={classes.cardFavIcon}
                                    onClick={() => {
                                      dispatch(addToFavorites(con));
                                    }}
                                  />
                                ) : (
                                  <Box>
                                    <FavoriteIcon
                                      key={index}
                                      className={classes.choosed}
                                      onClick={() => {
                                        dispatch(removeFromFavorites(con));
                                      }}
                                    />
                                  </Box>
                                )}
                              </Box>
                            </Box>
                            <Box className={classes.cardDetails}>
                              <Box>
                                <p className={classes.cardP}>
                                  Population: {con.population}
                                </p>
                                <p className={classes.cardP}>
                                  Region: {con.region}
                                </p>
                                <p className={classes.cardP}>
                                  Capital:{con.capital}
                                </p>
                              </Box>
                            </Box>
                          </Box>
                        </>
                      );
                    })}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default AllCountriesData;
const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardWrapper: {
    width: "87%",
    // display: "grid",
    // gridTemplateColumns: "1fr 1fr 1fr 1fr",
    // justifyItems: "center",
    // alignItems: "center",
    // alignContent: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  cardMain: {
    width: "300px",
    height: "400px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    textAlign: "left",
    marginTop: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
  cardImg: {
    width: "100%",
    height: "200px",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
  },
  cardName: {
    margin: "0px",
    paddingLeft: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardFavIcon: {
    paddingLeft: "12px",
    display: "flex",
    paddingRight: "20px",
  },
  cardDetails: {
    paddingBottom: "40px",
  },
  cardP: {
    margin: "0px",
    paddingLeft: "20px",
  },
  choosed: {
    color: "red",
    paddingLeft: "12px",
    display: "flex",
    paddingRight: "20px",
  },
}));
