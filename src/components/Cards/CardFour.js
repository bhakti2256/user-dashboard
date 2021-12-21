import React from 'react'
import { Typography, Card, CardContent } from '@material-ui/core'
import ChartTwo from '../Charts/ChartTwo'

const CardFour = () => {
    return (
        <Card>
            <CardContent>
                <Typography style={{ fontWeight: 'bold' }}>Monthly Aggregate</Typography>
                <Typography variant='caption'>2021</Typography>
                <ChartTwo />
            </CardContent>
        </Card>
    )
}

export default CardFour

