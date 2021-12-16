import { makeStyles } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createTheme';

const styles = ({ palette, shape, spacing }: Theme) => createStyles({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 484,
    width: 570,
    boxShadow: '0 2px 10px 0 rgba(160, 161, 188, 0.25)',
    borderRadius: shape.borderRadius,
    padding: '48px 100px 100px 67px',

    '& button': {
      color: palette.primary.main,
      fontSize: 15,
      fontWeight: 500,
      marginBottom: spacing(3),

      '& svg': {
        marginRight: spacing(1),
      },
      '& p': {
        fontWeight: 'inherit',
      },
    },
    '& h4': {
      fontWeight: 'bold',
      color: '#444',
    },
  },
});

export default makeStyles(styles);
