import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Divider, Container } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import BallotIcon from "@material-ui/icons/Ballot";

const useStyles = makeStyles((theme) => ({
  appbar:{
    backgroundColor: "transparent",
    border:"none",
  },
  grow: {
    flexGrow: 3,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    cursor: "pointer",
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("user");
    history.replace("/auth/login");
  };

  //search
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const [text, setText] = useState(search.get("q") || "");

  const handleInput = (e) => {
    const value = e.target.value;
    if (!value) history.replace(location.pathname);
    search.set("q", value.trim());
    history.replace(location.pathname + "?" + search.toString());
  };

  useEffect(() => {
    const newSearch = new URLSearchParams(location.search);
    if ((newSearch.get("q") || "") !== text) setText(newSearch.get("q") || "");
  }, [location, text]);

  //cart
  const cartItemsCount = useSelector((state) => {
    return state.products.cart.length;
  });

  //

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => history.replace("/auth/register")}>
        Профиль
      </MenuItem>
      <MenuItem onClick={() => history.replace("/admin")}>
        Личный кабинет
      </MenuItem>
      <Divider />
      <MenuItem onClick={logout}>Выйти</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => history.replace("/catalog")}>
        <IconButton color="inherit">
          <BallotIcon />
        </IconButton>
        <p>Каталог</p>
      </MenuItem>

      <MenuItem onClick={() => history.replace("/cart")}>
        <IconButton color="inherit">
          <Badge badgeContent={cartItemsCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Корзина</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={() => history.replace("/auth/login")}
        >
          <AccountCircle />
        </IconButton>
        <p>Профиль</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Container maxWidth="lg">
      <div className={classes.grow}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.sectionMobile}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon onClick={() => history.replace("/")} />
            </IconButton>
            <Typography
              onClick={() => history.replace("/")}
              className={classes.title}
              variant="h5"
              noWrap
            >
              Ondoo.kg
            </Typography>
            <div className={classes.title}>
              <IconButton
                color="inherit"
                onClick={() => history.replace("/catalog")}
              >
                <BallotIcon />
              </IconButton>
              <Typography
                // className={classes.title}
                onClick={() => history.replace("/catalog")}
                variant="p"
                noWrap
              >
                Каталог
              </Typography>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Поиск товаров…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={handleInput}
                value={text}
                name="q"
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <div>
                <IconButton
                  onClick={() => history.replace("/shopping-cart")}
                  color="inherit"
                >
                  <Badge badgeContent={cartItemsCount} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <Typography
                  onClick={() => history.replace("/shopping-cart")}
                  variant="p"
                  // noWrap
                >
                  Корзина
                </Typography>
              </div>
              <div>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle
                    onClick={() => history.replace("/auth/login")}
                  />
                </IconButton>
                <Typography
                  // onClick={() => history.replace("/auth/login")}
                  variant="p"
                  // noWrap
                >
                  Профиль
                </Typography>
              </div>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </Container>
  );
}
