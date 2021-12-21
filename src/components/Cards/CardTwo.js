import React from 'react'
import { Typography, Card, CardContent } from '@material-ui/core'
import ChartOne from '../Charts/ChartOne'

const CardTwo = () => {
    return (
        <Card>
            <CardContent>
                <div style={{ display: 'flex' }}>
                    <div>
                        <Typography style={{ fontWeight: 'bold' }}>4.75W</Typography>
                        <Typography variant='caption'>Generation</Typography>
                    </div>
                    <div style={{ marginLeft: '15px' }}>
                        <Typography style={{ fontWeight: 'bold' }}>3247.65W</Typography>
                        <Typography variant='caption'>Consumption</Typography>

                    </div>
                </div>

                {/* Chart Component */}
                <ChartOne />
            </CardContent>
        </Card>
    )
}

export default CardTwo
