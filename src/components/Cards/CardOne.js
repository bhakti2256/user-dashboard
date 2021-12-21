import React from 'react'
import { Grid } from '@material-ui/core'
import DataCard from './DataCard'

const cardOneDetails = [
    {
        name: 'Live Generation',
        value: '4.75 W',
        cardColor: '#7d38df'
    },
    {
        name: 'Live Consumption',
        value: '3247.65 W',
        cardColor: '#e86c63'
    },
    {
        name: "Today's Generation",
        value: '2.48 Units',
        cardColor: "#be4ed0"
    },
    {
        name: "Today's Consumption",
        value: '4.03 Units',
        cardColor: '#3b9fe2'
    }
]

const CardOne = () => {
    return (
        <div>
            <Grid container justifyContent='center'>
                {cardOneDetails.map((item) => {
                    return (
                        <Grid item md={6} xs={12} key={item.name}>
                            <DataCard
                                name={item.name}
                                value={item.value}
                                cardColor={item.cardColor}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default CardOne
