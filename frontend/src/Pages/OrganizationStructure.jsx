import React from 'react';
import Tree from 'react-d3-tree';

const orgChartData = {
  name: 'Chairman',
  children: [
    {
      name: 'Managing Director',
      children: [
        {
          name: 'Executive Director (HR & Adm.)',
          children: [
            {
              name: 'GM (HR & Adm.)',
              children: [
                {
                  name: 'DGM (HR & Adm.)/P',
                  children: [
                    { name: 'DS', children: [{ name: 'US' }, { name: 'DLA' }, { name: 'DBA' }] },
                    { name: 'ITM', children: [{ name: 'AITM' }] },
                  ],
                },
              ],
            },
            { name: 'CDBA' },
          ],
        },
        {
          name: 'Director(Projects)',
          children: [
            {
              name: 'CE (P1)',
              children: [{ name: 'ESE', children: [{ name: 'EEE' }] }],
            },
            {
              name: 'CE (P2)',
              children: [{ name: 'ESE', children: [{ name: 'EEE' }] }],
            },
            {
              name: 'CE (P&E)',
              children: [{ name: 'ESE', children: [{ name: 'EEE' }] }],
            },
            {
              name: 'CE (Trng & ERP)',
              children: [{ name: 'ESE', children: [{ name: 'EEE' }] }],
            },
          ],
        },
        {
          name: 'Director(Operations)',
          children: [
            {
              name: 'CE (STU)',
              children: [{ name: 'ESE', children: [{ name: 'EEE' }] }],
            },
            {
              name: 'CE (CRITL)',
              children: [{ name: 'ESE', children: [{ name: 'EEE' }] }],
            },
            {
              name: 'CE (O&M)',
              children: [{ name: 'ESE', children: [{ name: 'EEE' }] }],
            },
            {
              name: 'CE (Communication)',
              children: [{ name: 'ESE', children: [{ name: 'EEE' }] }],
            },
          ],
        },
      ],
    },
  ],
};


const OrganizationChart = () => {
  const containerStyles = {
    width: '100%',
    height: '800px',
  };

  // Custom node styling for square nodes
  const squareNode = {
    shape: 'rect', // Rectangle/Square shape
    shapeProps: {
      width: 140,
      height: 60,
      x: -70, // x and y coordinates to center the text within the square
      y: -30,
      fill: '#fff',
      stroke: '#3f51b5',
      strokeWidth: 2,
      rx: 10, // Optional: make the square slightly rounded
    },
  };

  return (
    <div style={containerStyles}>
      <Tree
        data={orgChartData}
        orientation="vertical"
        nodeSvgShape={squareNode}
        textLayout={{ x: 0, y: 0, transform: 'translate(0, -10)' }} // Center the text inside the node
        separation={{ siblings: 2, nonSiblings: 2 }} // Control the separation between nodes
      />
    </div>
  );
};

export default OrganizationChart;



