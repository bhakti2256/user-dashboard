import React from 'react'
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts'

const data = []
for (let i = 1; i <= 2; i++) {
    data.push({
        month: i === 1 ? 'December' : 'January',
        value: Math.random() * 100,
        value2: Math.random() * 100
    })
}

const ChartTwo = () => {
    return (
        <ResponsiveContainer width='100%' height={110}>
            <BarChart data={data} margin={{ top: 10, right: 30 }}>
                <Bar dataKey="value" fill='rgb(116 57 199)' barSize={10}/>
                <Bar dataKey='value2' fill='#ffad4a' barSize={10}/>
                <XAxis dataKey='month' />
                <YAxis dataKey='value' tickLine={false} tickCount={10} />
                <CartesianGrid opacity={0.3} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default ChartTwo