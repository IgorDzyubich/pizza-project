import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const Statistics = () => {
    const classes = useStyles();
    const pizzaList = useSelector(state => state.PizzaListReducer) 
    const orders = useSelector(state => state.OrdersReducer.orders) 

    const statistics = []
    const lastPizzas = []
    orders.forEach(el => lastPizzas.push(...el.payload))

    function getPizzaInfo(lastPizzas){
        let resultPopular = []
        let resultIngridientsArr = []
        let resultIngridients = new Set()

        for (let pizza in pizzaList) {
            let count = lastPizzas.filter(el => el.pizza === pizza).length
            statistics.push({pizza, count, ingridients: pizzaList[pizza]})
        }
        statistics.sort((a, b) => b.count - a.count)
        
        for (let i = 0; i < 5; i++) {
            resultPopular.push(statistics[i].pizza)
            resultIngridientsArr.push(statistics[i].ingridients)
        }
        
        resultIngridientsArr.forEach(el => {
            Object.keys(el).forEach(item => resultIngridients.add(item)) 
        })

        return {
            popular: resultPopular,  
            ingridients: Array.from(resultIngridients)   
        }
    }
    
    return (
        <div>
            <h1 style={{ paddingLeft: '10px'}}>Statistics</h1>
            <div className={classes.root}>
                <h2 style={{ paddingLeft: '10px'}}>Popular Pizza</h2>
                <List component="nav" aria-label="main mailbox folders">
                    {
                        getPizzaInfo(lastPizzas).popular.map(item => {
                            return <ListItem button key={item}>
                                        <ListItemIcon>
                                            <LocalPizzaIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                        })
                    }
                </List>
                <h2 style={{ paddingLeft: '10px'}}>Popular Ingridients</h2>
                <List component="nav" style={{ marginTop: '10px'}} aria-label="main mailbox folders">
                    {
                        getPizzaInfo(lastPizzas).ingridients.map(item => {
                            return <ListItem button key={item}>
                                        <ListItemIcon>
                                            <LocalPizzaIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                        })
                    }
                </List>
                </div>
        </div>
    )
}

export default Statistics