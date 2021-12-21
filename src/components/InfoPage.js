import { Grid, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import { ArrowForwardIos } from '@material-ui/icons'
import CardOne from './Cards/CardOne'
import CardTwo from './Cards/CardTwo'
import CardThree from './Cards/CardThree'
import CardFour from './Cards/CardFour'

const InfoPage = () => {
    return (
        <div>
            {/* Device Name */}
            <h3>UNITLINK_Maheshbhai_Home Energy Summary</h3>

            {/* Update device details */}
            <IconButton>
            <Typography variant='button'>Update Device Detail</Typography>
                <ArrowForwardIos fontSize='small' />
            </IconButton>

            {/* 4x4 Grid */}
            <Grid container justifyContent='center' spacing={2}>

                {/* Item1 */}
                <Grid item md={6} xs={12}>
                    <CardOne />
                </Grid>

                {/* Item2 */}
                <Grid item md={6} xs={12}>
                    <CardTwo />
                </Grid>

                {/* Item 3 */}
                <Grid item md={6} xs={12}>
                    <CardThree />
                </Grid>

                {/* Item 4 */}
                <Grid item md={6} xs={12} style={{ height: '220px' }}>
                    <CardFour />
                </Grid>
            </Grid>
        </div>
    )
}

export default InfoPage