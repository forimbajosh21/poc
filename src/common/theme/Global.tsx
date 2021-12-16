import withStyles from '@material-ui/core/styles/withStyles';

const Global = withStyles((theme) => ({
  '@global': {
    html: {
      height: '100%',
    },
    body: {
      color: '#444444',
      backgroundColor: theme.palette.common.white,
      height: '100%',
    },
    '::-webkit-scrollbar': {
      width: theme.spacing(1),
    },
    '::-webkit-scrollbar-track': {
      borderRadius: 8,
      background: '#F5F5F5',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: 8,
      background: '#CCCCCC',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#B8B8B8',
    },
    '::placeholder': {
      color: '#CCCCCC',
    },

    '.dots-loading:after': {
      content: '" ."',
      animation: 'dots 1s steps(5, end) infinite',
    },
    '@keyframes dots': {
      '0%, 20%': {
        color: 'rgba(0,0,0,0)',
        textShadow: '.25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0),',
      },
      '40%': {
        color: 'white',
        textShadow: '.25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0)',
      },
      '60%': {
        textShadow: '.25em 0 0 white, .5em 0 0 rgba(0,0,0,0)',
      },
      '80%, 100%': {
        textShadow: '.25em 0 0 white, .5em 0 0 white',
      },
    },
  },
}))(() => null);

export default Global;
