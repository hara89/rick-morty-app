const color = {
  primary: 'rgb(60, 62, 68)',
  white: '#ffffff',
  black: 'rgb(36, 40, 47)',
  copper_coin: '#b1624e',
};

const font = {
  family: 'Poppins',
  weight: {
    regular: 400,
    medium: 500,
    semi_bold: 600,
  },
};

const transition = {
  transitionFast: 'all .2s ease',
  transitionNormal: 'all .4s ease',
  transitionSlow: 'all .8s ease',
};

const breakPoints = {
  desktop: '1200px',
  laptop: '950px',
  tablet: '768px',
  mobile: '400px',
};

export const theme = {
  default: {
    name: 'default',
    color,
    font,
    transition,
    breakPoints,
  },
};
