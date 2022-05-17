import { useState } from "react";
import { Box } from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
import { Buttons } from "../../Units/buttons";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core";

const HamBurger = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  //   const navigate = useNavigate();
  //   function handleRoute(path) {
  //     navigate(path);
  //     setOpen(false);
  //   }

  return (
    <div className={classes.RealHamburger}>
      <IconButton
        className={classes.hamBurgerBtn}
        edge="start"
        style={{ color: "white" }}
        fontSize="large"
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {}}
      >
        <Box p={2}>
          {open ? (
            <KeyboardArrowRightIcon
              variant="contained"
              color="primary"
              fontSize="large"
              onClick={() => {
                setOpen(false);
              }}
            />
          ) : (
            <KeyboardArrowLeftIcon
              variant="contained"
              color="primary"
              fontSize="large"
            />
          )}
        </Box>
        <hr />
        <List>
          <ListItem className={classes.ListItem}>
            <Box className={classes.HeaderLinks}>
              <Box>
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  Favorite Countries
                </Buttons>
              </Box>
              <Box>
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  About
                </Buttons>
              </Box>
              <Box>
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  Explore
                </Buttons>
              </Box>
              <Box>
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  Donate
                </Buttons>
              </Box>
            </Box>
          </ListItem>
        </List>
        <Divider />
      </SwipeableDrawer>
    </div>
  );
};

export default HamBurger;
const useStyles = makeStyles((theme) => ({
  HeaderItems: {
    cursor: "pointer",
    padding: "10px",
    "&:hover": {
      color: "#6605B8",
    },
  },
  hamBurgerBtn: {
    backgroundColor: "#000",
    borderRadius: "none",
    color: "#000",
  },
  RealHamburger: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      color: "#000",
    },
  },
  ListItem: {
    width: "300px",
    height: "350px",
    display: "flex",
    justifyContent: "space-around",
  },
  HeaderLinks: {
    width: "300px",
    height: "350px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
  },
}));
