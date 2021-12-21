import React from 'react'
import { Typography, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    card: {
        height: '200px'
    },
    wrapperClass: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column'
        }
    }
}))

const CardThree = () => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardContent>
                <div className={classes.wrapperClass}>
                    <div>
                        <Typography style={{ fontWeight: 'bold' }}>Daily Summary</Typography>
                        <Typography>December</Typography>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: '15px' }}>
                            <Typography style={{ fontWeight: 'bold' }}>0.00 Units</Typography>
                            <Typography variant='caption'>Generation</Typography>
                        </div>
                        <div>
                            <Typography style={{ fontWeight: 'bold' }}>0.00 Units</Typography>
                            <Typography variant='caption'>Consumption</Typography>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardThree
