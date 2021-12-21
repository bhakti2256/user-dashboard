import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100px', 
        padding: '2px', 
        margin: '5px', 
        color: 'white',
        // [theme.breakpoints.down("xs")]: {
        //     width: '240px'
        // }
    },
    text: {
        textTransform: 'uppercase',
        fontSize: '10px',
        margin: '-10px -8px'
    },
    unit: {
        fontWeight: 'bold',
        marginTop: '24px',
        fontSize: '20px'
    }
}))

const DataCard = ({ name, value, cardColor }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card} style={{backgroundColor: cardColor}}>
            <CardContent>
            <Typography className={classes.text}>{name}</Typography>
            <Typography gutterBottom className={classes.unit}>{value}</Typography>
            </CardContent>
        </Card>
    )
}

export default DataCard
