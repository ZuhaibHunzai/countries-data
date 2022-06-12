import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getCountrydetails } from "../../Features/Actions/getCountryDetails";
import { useEffect } from "react";
import { Buttons } from "../../Units/buttons";

const CountryDetails = () => {
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }
  const classes = useStyles();
  const dispatch = useDispatch();
  const param = useParams();
  const {
    countryDetailsSlicer: { selectedCountry, isCountryLoading },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCountrydetails(param.countryName));
  }, []);

  console.log(param);

  return (
    <>
      <Box className={classes.goBackBtn}>
        <Buttons
          buttonSize="btn--medium"
          buttonStyle="btn--white--outlined"
          onClick={() => {
            handleRoute("/");
          }}
        >
          Back
        </Buttons>
      </Box>
      <Box>
        {/* <Box>
          <h2>selected country: {param.countryName}</h2>
        </Box> */}
        <Box>
          {isCountryLoading ? (
            <CircularProgress />
          ) : (
            <Box>
              <Box>
                {selectedCountry.map((con) => {
                  return (
                    <>
                      <Box className={classes.detailsContainer}>
                        <Box className={classes.countryFlag}>
                          <img
                            src={con.flag}
                            alt={`flag of ${con.name}`}
                            className={classes.flag}
                          />
                        </Box>

                        <Box className={classes.countryDetails}>
                          <Box>
                            <h2 className={classes.countryName}>{con.name}</h2>
                          </Box>
                          <Box className={classes.smallDetails}>
                            <Box>
                              <p className={classes.p}>
                                <span className={classes.span}>
                                  Native Name:
                                </span>{" "}
                                {con.nativeName}
                              </p>
                            </Box>
                            <Box>
                              <p className={classes.p}>
                                <span className={classes.span}>
                                  Population:{" "}
                                </span>
                                {con.population}
                              </p>
                            </Box>
                            <Box>
                              <p className={classes.p}>
                                <span className={classes.span}>Region: </span>
                                {con.region}
                              </p>
                            </Box>
                            <Box>
                              <p className={classes.p}>
                                <span className={classes.span}>
                                  Sub Region:{" "}
                                </span>
                                {con.subregion}
                              </p>
                            </Box>
                            <Box>
                              <p className={classes.p}>
                                <span className={classes.span}>Capital: </span>
                                {con.capital}
                              </p>
                            </Box>
                            <Box>
                              <p className={classes.p}>
                                <span className={classes.span}>
                                  Top Level Domain:{" "}
                                </span>
                                {con.topLevelDomain}
                              </p>
                            </Box>
                            <Box>
                              <p className={classes.p}>
                                <span className={classes.span}>
                                  Currencies:{" "}
                                </span>
                                {con.currencies.map((cur) => {
                                  return cur.name;
                                })}
                              </p>
                            </Box>
                            <Box>
                              <p className={classes.p}>
                                <span className={classes.span}>Language: </span>
                                {con.languages.map((lan) => {
                                  return lan.name;
                                })}
                              </p>
                            </Box>
                          </Box>
                          <Box>
                            <Box className={classes.border}>
                              <p className={classes.p}>
                                <span className={classes.span}>
                                  Border Countries
                                </span>{" "}
                                {con.borders.map((bor) => {
                                  return `${bor}, `;
                                })}
                              </p>
                            </Box>
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
    </>
  );
};

export default CountryDetails;

const useStyles = makeStyles((theme) => ({
  detailsContainer: {
    width: "100%",
    height: "80vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "left",
    fontFamily: "Nunito, sans-serif",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "auto",
      paddingTop: "12px",
    },
  },
  goBackBtn: {
    display: "flex",
    justifyContent: "left",
    marginTop: "30px",
    marginLeft: "120px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "12px",
    },
  },
  countryFlag: {
    width: "600px",
    height: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "auto",
    },
  },
  countryName: {
    fontWeight: "700",
  },
  countryDetails: {
    height: "270px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  flag: {
    width: "100%",
    height: "100%",
  },
  smallDetails: {
    width: "450px",
    height: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr ",
      width: "100%",
      paddingBottom: "30px",
    },
  },
  border: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "30px",
    },
  },
  span: {
    fontWeight: "bold",
  },
  p: {
    fontWeight: "300",
    margin: "0px",
    paddingTop: "12px",
  },
}));
