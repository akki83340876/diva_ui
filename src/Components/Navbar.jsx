import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Nav from '@mui/material/Nav';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlinedIcon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Nav } from 'react-bootstrap';
import logo from '../assets/imeges/logo.png';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {

    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [anchorEl3, setAnchorEl3] = React.useState(null);
    const [anchorEl4, setAnchorEl4] = React.useState(null);
    const [anchorEl5, setAnchorEl5] = React.useState(null);
    const [anchorEl6, setAnchorEl6] = React.useState(null);

    const handleMenuOpen1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const handleMenuClose1 = () => {
        setAnchorEl1(null);
    };

    const handleMenuOpen2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleMenuClose2 = () => {
        setAnchorEl2(null);
    };

    const handleMenuOpen3 = (event) => {
        setAnchorEl3(event.currentTarget);
    };

    const handleMenuClose3 = () => {
        setAnchorEl3(null);
    };
    const handleMenuOpen4 = (event) => {
        setAnchorEl4(event.currentTarget);
    };

    const handleMenuClose4 = () => {
        setAnchorEl4(null);
    };
    const handleMenuOpen5 = (event) => {
        setAnchorEl5(event.currentTarget);
    };

    const handleMenuClose5 = () => {
        setAnchorEl5(null);
    };
    const handleMenuOpen6 = (event) => {
        setAnchorEl6(event.currentTarget);
    };

    const handleMenuClose6 = () => {
        setAnchorEl6(null);
    };

    return (
        <div style={{backgroundColor:'inherit',color:'black'}}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <div className="logo col-4 col-sm-4 col-md-4 col-lg-2 align-self-center">
                            <a href="/">
                                <img
                                    src={logo}
                                    alt="Diva Multipurpose Html Template"
                                    title="Diva Multipurpose Html Template"
                                />
                            </a>
                        </div>
                        <Button
                            color="inherit"
                            onClick={handleMenuOpen1}
                        >
                            LAYOUT
                        </Button>
                        <Menu
                            anchorEl={anchorEl1}
                            open={Boolean(anchorEl1)}
                            onClose={handleMenuClose1}
                        >
                            <MenuItem onClick={handleMenuClose1}>Layout 1</MenuItem>
                            <MenuItem onClick={handleMenuClose1}>Layout 2</MenuItem>
                            <MenuItem onClick={handleMenuClose1}>Layout 3</MenuItem>
                            <MenuItem onClick={handleMenuClose1}>Layout 4</MenuItem>
                            <MenuItem onClick={handleMenuClose1}>Layout 5</MenuItem>
                            <MenuItem onClick={handleMenuClose1}>Layout 6</MenuItem>
                            <MenuItem onClick={handleMenuClose1}>Layout 7</MenuItem>
                            <MenuItem onClick={handleMenuClose1}>Layout 8</MenuItem>
                            <MenuItem onClick={handleMenuClose1}>Layout 9</MenuItem>
                            <MenuItem onClick={handleMenuClose1}>Layout 10</MenuItem>
                            <MenuItem onClick={handleMenuClose1}>Layout 11</MenuItem>
                            <MenuItem onClick={handleMenuClose1}>Layout 12</MenuItem>
                            <MenuItem onClick={handleMenuClose1}>Layout 13</MenuItem>
                            <MenuItem onClick={handleMenuClose1}>Layout 14</MenuItem>
                        </Menu>
                        <Button
                            color="inherit"
                            onClick={handleMenuOpen2}
                        >
                            SHOP
                        </Button>
                        <Menu
                            anchorEl={anchorEl2}
                            open={Boolean(anchorEl2)}
                            onClose={handleMenuClose2}
                        >
                            <MenuItem onClick={handleMenuClose2}>Shop page</MenuItem>
                            <MenuItem onClick={handleMenuClose2}>Shop page</MenuItem>
                            <MenuItem onClick={handleMenuClose2}>Shop Other page</MenuItem>
                            <MenuItem onClick={handleMenuClose2}>Collection page</MenuItem>
                        </Menu>
                        <Button
                            color="inherit"
                            onClick={handleMenuOpen3}
                        >
                            FEATURES
                        </Button>
                        <Menu
                            anchorEl={anchorEl3}
                            open={Boolean(anchorEl3)}
                            onClose={handleMenuClose3}
                        >
                            <MenuItem onClick={handleMenuClose3}>Product page</MenuItem>
                            <MenuItem onClick={handleMenuClose3}>Product page</MenuItem>
                            <MenuItem onClick={handleMenuClose3}>Product page</MenuItem>
                        </Menu>
                        <Button
                            color="inherit"
                            onClick={handleMenuOpen4}
                        >
                            PAGES
                        </Button>
                        <Menu
                            anchorEl={anchorEl4}
                            open={Boolean(anchorEl4)}
                            onClose={handleMenuClose4}
                        >
                            <MenuItem onClick={handleMenuClose4}>Product page</MenuItem>
                            <MenuItem onClick={handleMenuClose4}>Product page</MenuItem>
                            <MenuItem onClick={handleMenuClose4}>Product page</MenuItem>
                            <MenuItem onClick={handleMenuClose4}>Product page</MenuItem>
                            <MenuItem onClick={handleMenuClose4}>Product page</MenuItem>
                            <MenuItem onClick={handleMenuClose4}>Product page</MenuItem>
                            <MenuItem onClick={handleMenuClose4}>Product page</MenuItem>
                        </Menu>
                        <Button
                            color="inherit"
                            onClick={handleMenuOpen5}
                        >
                            LOOKBOOK
                        </Button>
                        <Menu
                            anchorEl={anchorEl5}
                            open={Boolean(anchorEl5)}
                            onClose={handleMenuClose5}
                        >
                            <MenuItem onClick={handleMenuClose5}>2 Columns</MenuItem>
                            <MenuItem onClick={handleMenuClose5}>3 Columns</MenuItem>
                            <MenuItem onClick={handleMenuClose5}>4 Columns</MenuItem>
                            <MenuItem onClick={handleMenuClose5}>5 Columns + Fullwidth</MenuItem>
                            <MenuItem onClick={handleMenuClose5}>Lookbook Shop</MenuItem>
                        </Menu>
                        <Button
                            color="inherit"
                            onClick={handleMenuOpen6}
                        >
                            BLOG
                        </Button>
                        <Menu
                            anchorEl={anchorEl6}
                            open={Boolean(anchorEl6)}
                            onClose={handleMenuClose6}
                        >
                            <MenuItem onClick={handleMenuClose6}>Left Sidebar</MenuItem>
                            <MenuItem onClick={handleMenuClose6}>Right Sidebar</MenuItem>
                            <MenuItem onClick={handleMenuClose6}>Grid View</MenuItem>
                            <MenuItem onClick={handleMenuClose6}>List View</MenuItem>
                            <MenuItem onClick={handleMenuClose6}>Full Width</MenuItem>
                            <MenuItem onClick={handleMenuClose6}>Masonry</MenuItem>
                            <MenuItem onClick={handleMenuClose6}>Single post</MenuItem>
                        </Menu>
                        <Typography
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                            {/* <SearchIcon/>
                            <Link href="/"><PersonOutlineOutlinedIcon/></Link>
                            <FavoriteIcon/>
                            <ShoppingBagOutlinedIcon/> */}
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search entire store..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Nav>
                            {/* <Nav.Link href="#">
                                <SearchIcon />
                            </Nav.Link>
                            <Nav.Link href="#">
                                <PersonOutlineOutlinedIcon />
                            </Nav.Link>
                            <Nav.Link href="#">
                                <FavoriteIcon />
                            </Nav.Link> */}
                            {/* <Nav.Link href="#">
                                <ShoppingCartOutlinedIcon />
                            </Nav.Link> */}
                        </Nav>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}