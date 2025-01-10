// import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Switch } from '@mui/material';

const COLORS = ['#3f51b5', '#ffb347', '#72c6ef', '#ef6363', '#a9d18e', '#f5de50', '#7b6d92', '#b0b0b0'];

const dataPie = [
  { name: 'Coal', value: 48.53 },
  { name: 'Wind', value: 10.50 },
  { name: 'Solar', value: 19.45 },
  { name: 'Bio Power', value: 2.44 },
  { name: 'Hydro', value: 10.47 },
  { name: 'Oil & Gas', value: 5.67 },
  { name: 'Nuclear', value: 1.82 },
  { name: 'Small-Hydro', value: 1.12 },
];

const dataBar = [
  { year: '2015-16', total: 305, growth: 1.5 },
  { year: '2016-17', total: 327, growth: 3.0 },
  { year: '2017-18', total: 344, growth: 4.5 },
  { year: '2018-19', total: 356, growth: 2.2 },
  { year: '2019-20', total: 370, growth: 1.8 },
  { year: '2020-21', total: 382, growth: 3.5 },
  { year: '2021-22', total: 400, growth: 5.0 },
  { year: '2022-23', total: 416, growth: 6.0 },
  { year: '2023-24', total: 442, growth: 2.5 },
  { year: '2024-25', total: 448, growth: 3.0 },
];

const PeakDemand = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#e0f2f1', borderRadius: '10px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        India Power Capacity - Overview
      </Typography>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        Power Sources Mix - Installed Capacity (as on 31st July 2024)
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={dataPie}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {dataPie.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '30px' }}>
        Power Sources Trend - Installed Capacity
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        From 2015-16 to 2024-25 (in GW) as on 31st July 2024
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataBar}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#3f51b5" name="Installed Capacity (GW)" />
          <Bar dataKey="growth" fill="#ffb347" name="YoY Growth Rate (%)" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PeakDemand;
