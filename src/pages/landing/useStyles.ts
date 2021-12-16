import { darken, makeStyles } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createTheme';

const styles = ({ palette, shape, spacing }: Theme) => createStyles({
  appbar: {},
  toolbar: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    paddingTop: 100,
  },
  rectangle: {
    height: 60,
    width: 176,
    backgroundColor: palette.common.white,
    borderRadius: shape.borderRadius,
    padding: '8px 20px 7px',
  },
  btn: {
    color: palette.common.white,
    marginRight: spacing(3),
    '&:last-child': {
      marginRight: 'unset',
    },
  },
  metamaskBtn: {
    backgroundColor: palette.common.white,
    color: palette.primary.main,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: darken(palette.common.white, 0.08),
    },
  },
  metamaskIcon: {
    height: 32,
    width: 32,
    marginRight: spacing(3),
  },
  header: {
    fontWeight: 'bold',
    marginTop: 27,
  },
  hero: {
    marginBottom: 88,
    '& .header': {
      fontWeight: 'bold',
      marginTop: 27,
    },
    '& .subheader': {
      fontSize: 20,
    },
  },
  features: {
    '& .header': {
      fontWeight: 'bold',
      marginBottom: spacing(3),
    },
    '& .feature': {
      height: 159,
      width: '100%',
      padding: '30px 35px 30px 30px',
      borderRadius: shape.borderRadius,
      backgroundColor: '#f8f8f8',
      marginBottom: 97,

      '& .header': {
        display: 'flex',
        alignItems: 'center',

        '& .svg': {
          fontSize: 45,
          fill: '#86b63a',
          color: '#86b63a',
          marginRight: spacing(3),
        },

        '& h6': {
          fontWeight: 'bold',
        },
      },
    },
  },
  footer: {
    height: 54,
    paddingTop: 17,
    paddingBottom: 16,
    backgroundColor: '#475a6b',
    justifyContent: 'center',
    color: palette.common.white,
  },
});

export default makeStyles(styles);
