import { Box } from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";
import { Buttons } from "../../Units/buttons";
import HamBurger from "../HamBurger/index";
import { Link, useNavigate } from "react-router-dom";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { getAllCountries } from "../../Features/Actions/getAllContries";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleNavigate(path) {
    navigate(path);
  }

  return (
    <Box className={classes.navMain}>
      <Box className={classes.logo}>
        <Link
          to="/"
          className={classes.logoText}
          onClick={() => {
            dispatch(getAllCountries());
          }}
        >
          <Typography className={classes.logoText} variant="h4">
            Where is the world?
          </Typography>
        </Link>
      </Box>
      <Box className={classes.navItems}>
        <Box>
          <Buttons
            buttonSize="btn--medium"
            buttonStyle="btn--black--solid"
            onClick={() => {
              handleNavigate("/favorite-countries");
            }}
          >
            Favorite
          </Buttons>
        </Box>
        <Box>
          <Buttons
            buttonSize="btn--medium"
            buttonStyle="btn--black--solid"
            onClick={() => {
              handleNavigate("/about");
            }}
          >
            About
          </Buttons>
        </Box>
        <Box>
          <Buttons
            buttonSize="btn--medium"
            buttonStyle="btn--black--solid"
            onClick={() => {
              handleNavigate("/explore");
            }}
          >
            Explore
          </Buttons>
        </Box>
        <Box>
          <Buttons
            buttonSize="btn--medium"
            buttonStyle="btn--black--solid"
            onClick={() => {
              handleNavigate("/donate");
            }}
          >
            Donate
          </Buttons>
        </Box>
      </Box>
      <Box className={classes.themeDiv}>
        <Box>
          <NightsStayIcon />
        </Box>
        <Box>
          <h3>Dark Theme</h3>
        </Box>
      </Box>
      <Box className={classes.HamBurger}>
        <HamBurger />
      </Box>
    </Box>
  );
};

export default Navbar;

const useStyles = makeStyles((theme) => ({
  navMain: {
    width: "100%",
    height: "10vh",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    // position: "fixed",
    // top: "0",
    // zIndex: "1",
  },
  themeDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Nunito, sans-serif",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logoText: {
    display: "flex",
    cursor: "pointer",
    color: "#000",
    textDecoration: "none",
    listStyle: "none",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "20px",
      fontSize: "32px",
      fontWeight: "bold",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5px",
      fontSize: "18px",
      fontWeight: "bold",
    },
  },
  navItems: {
    display: "flex",
    paddingRight: "100px",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  cart: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "50px",
  },
  cartIcon: {
    color: "#fff",
  },
  HamBurger: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));
