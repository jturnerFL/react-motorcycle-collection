import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import {Navbar} from '../../components/Navbar';
import { Link } from 'react-router-dom';


interface Props {
    title:string;
}

const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient( 134.6deg,  rgba(201,37,107,1) 15.4%, rgba(116,16,124,1) 74.7% )`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },

    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },

    button_text: {
        color: 'white',
        textDecoration:'none',
    },
});

export const Home = ( props: Props) => {

    const classes = useStyles();

    return (
     <>
        {/*<Navbar />*/}
        <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{props.title}</h1>
                <Button>
                    <Link to='/inventory' className={classes.button_text}>Check out the Inventory</Link>
                </Button>
            </div>
        </div>
     </>
  )
}
