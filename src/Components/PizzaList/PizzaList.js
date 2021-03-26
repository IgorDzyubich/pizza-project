import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import Button from '@material-ui/core/Button';
import {addOrdersActionCreator} from '../../Redux/actions/orders';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const PizzaList = () => {
    const classes = useStyles();
    const pizzaList = useSelector(state => state.PizzaListReducer) 
    const dispatch = useDispatch()
    const history = useHistory();

    let order = []
    
    const handleAddToOrder = (event, data) => {
        event.preventDefault()
        order.push(data)
    }

    const handleAddOrder = (event) => {
        event.preventDefault()
        dispatch(addOrdersActionCreator(order))
        history.push('/orders')
    }

    return (
        <div>
            <h1>PizzaList</h1>
            <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                    { Object.keys(pizzaList).map(pizza => {
                        let ingridients = Object.keys(pizzaList[pizza]).map(el => el + ', ')
                        return (
                            <ListItem button key={pizza}>
                                <ListItemIcon>
                                    <LocalPizzaIcon />
                                </ListItemIcon>
                                <ListItemText primary={pizza} secondary={ ingridients }/>
                                <Button variant="outlined" color="primary" onClick={(e) => handleAddToOrder(e, {pizza, ingridients})}>
                                    Add to order
                                </Button>
                            </ListItem>
                        )
                    }) }
                </List>
                </div>
                <Button style={{width: '100%', marginTop: '10px'}} variant="outlined" color="primary" onClick={handleAddOrder}>
                    Create order
                </Button>
        </div>
    )
}

export default PizzaList