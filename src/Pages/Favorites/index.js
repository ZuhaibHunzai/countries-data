import { Box, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../Features/Slicers/addFavorites";
import { makeStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Buttons } from "../../Units/buttons";

const Favorites = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    addFavorites: { favorites, hasChoosedCountry, hasRemovedCountry },
    getAllCountriesSlicer: { allCountryData },
  } = useSelector((state) => state);
  console.log(favorites, "favorites");
  return (
    <>
      <Box>
        {!hasChoosedCountry ? (
          <Box>
            <h2>You have not Favorited any country</h2>
          </Box>
        ) : (
          <Box className={classes.cards}>
            <Box className={classes.allCards}>
              {favorites.map((country) => {
                return (
                  <Box className={classes.cardMain}>
                    <Box className={classes.imgMain}>
                      <img
                        className={classes.flag}
                        src={country.flag}
                        alt="flag"
                      />
                    </Box>
                    <Box className={classes.nameDiv}>
                      <Box>
                        <h2 className={classes.countryName}>{country.name}</h2>
                      </Box>
                    </Box>
                    <Box className={classes.otherDetail}>
                      <Box>
                        <h5 className={classes.otherDetails}>
                          Population:{country.population}
                        </h5>
                      </Box>
                      <Box>
                        <h5 className={classes.otherDetails}>
                          Region:{country.region}
                        </h5>
                      </Box>
                      <Box>
                        <h5 className={classes.otherDetails}>
                          Capital:{country.capital}
                        </h5>
                      </Box>
                      <Box>
                        <Buttons
                          buttonSize="btn--medium"
                          buttonStyle="btn--primary--solid"
                          onClick={() => {
                            dispatch(removeFromFavorites(country));
                          }}
                        >
                          Remove
                        </Buttons>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Favorites;

const useStyles = makeStyles((theme) => ({
  otherDetails: {
    margin: "0px",
  },
  cards: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
  },
  allCards: {
    width: "80%",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
  cardMain: {
    width: "250px",
    height: "280px",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left",
    flexDirection: "column",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    marginTop: "30px",
    borderRadius: "8px",
  },
  nameDiv: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  otherDetail: {
    height: "50px",
    paddingLeft: "30px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "left",
    paddingBottom: "20px",
  },
  imgMain: {
    width: "250px",
    height: "150px",
  },
  flag: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
  },
  countryName: {
    fontFamily: "Nunito, sans-serif",
    fontWeight: "bold",
  },
  countryPopulation: {
    fontFamily: "Nunito, sans-serif",
    fontWeight: "bold",
  },
  countryRegion: {
    fontFamily: "Nunito, sans-serif",
    fontWeight: "bold",
  },
}));
