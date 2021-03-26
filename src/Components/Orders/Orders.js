import React from 'react'
import {deleteOrdersActionCreator} from '../../Redux/actions/orders'
import { useSelector, useDispatch  } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const Orders = () => {

    const classes = useStyles();
    const orders = useSelector(state => state.OrdersReducer.orders)
    const dispatch = useDispatch()

    const nandleDeleteOrder = (event, index) => {
        event.preventDefault()
        dispatch(deleteOrdersActionCreator(index))
    }

    return (
        <div>
            <h1>Orders</h1>
            {orders.length > 0 
                ?  <div className={classes.root}>
                    { orders.map((order,index) => {
                        return <List key={index} component="nav" style={{border: '1px solid grey', marginBottom: '20px', padding: '10px'}} aria-label="main mailbox folders">
                                <h2 style={{paddingLeft: '30px'}}>Order # {index+1}</h2>
                                    {order.payload.map((item, ind )=> {
                                        return (
                                            <ListItem key={ind} button>
                                                <ListItemIcon>
                                                    <LocalPizzaIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={item.pizza} secondary={item.ingridients}/>
                                            </ListItem>
                                        )
                                    })}
                                    <Button style={{width: '100%', marginTop: '10px'}} variant="outlined" color="primary" onClick={(e) => nandleDeleteOrder(e, index)}>
                                        Delete order 
                                    </Button>
                                </List>
                    }).reverse() }
                    </div>
                : <h2>No orders</h2>
            }
            
        </div>
    )
}

export default Orders