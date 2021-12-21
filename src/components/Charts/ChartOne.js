import React from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from 'recharts'

const data = []
for (let i = 1; i <= 35; i++) {
    data.push({
        day: i,
        value: Math.random() * 2000,
        value2: i < 20 ? 0 : Math.random() * 1500
    })
}

const ChartOne = () => {

    return (
        <div>
            <ResponsiveContainer width='100%' height={150}>
                <AreaChart data={data} margin={{ top: 10, right: 30 }}>
                    <Area dataKey="value" fill='rgb(116 57 199)' />
                    <Area dataKey='value2' fill='#ffad4a' />
                    <XAxis dataKey='day' />
                    <YAxis dataKey='value' tickLine={false} tickCount={10} />
                    <Tooltip />
                    <CartesianGrid opacity={0.3} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartOne
