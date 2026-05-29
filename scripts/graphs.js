/*
import { Colors } from 'https://cdn.jsdelivr.net/npm/chart.js';

Chart.register(Colors);
*/

const orangutan = document.getElementById('orangutan-population');
const land = document.getElementById('land-use');

Chart.defaults.color = '#ffffff';
Chart.defaults.font.family = 'Titillium Web';

new Chart(orangutan, {
  type: 'bar',
  data: {
    labels: [1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020],
    datasets: [{
      label: 'Approximate Orangutan Population',
      data: [230000, 210000, 205000, 190000, 180000, 175000, 145000, 119000, 100000, 95000],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#bbbbbb80'
        }
      },
      x: {
        grid: {
          color: '#bbbbbb80'
        }
      }
    }
  }
});

new Chart(land, {
  type: 'line',
  data: {
    labels: [1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020],
    datasets: [{
      label: 'Indonesia Oil Palm Plantation Land Use (Hectares)',
      data: [100000, 142000, 204000, 348700, 673033, 1190000, 2010000, 3690000, 5780000, 8650000, 13250000]
    },
    {
      label: 'Malaysia Oil Palm Plantation Land Use (Hectares)',
      data: [149900, 385666, 777388, 1200000, 1750000, 2540000, 3380000, 4050000, 4850000, 4860000, 5230000]
    },
    {
      label: 'Thailand Oil Palm Plantation Land Use (Hectares)',
      data: [950, 5100, 11136, 53255, 103108, 153422, 230053, 324193, 541569, 648198, 939324]
    },
    {
      label: 'Worldwide Oil Palm Plantation Land Use (Hectares)',
      data: [3260000, 3540000, 4280000, 4900000, 6120000, 8360000, 10390000, 13470000, 16880000, 20610000, 27260000]
    }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#bbbbbb80'
        }
      },
      x: {
        grid: {
          color: '#bbbbbb80'
        }
      }
    }
  }
});