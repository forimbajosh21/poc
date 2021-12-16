import { darken, makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = ({ palette, shape, spacing }: Theme) => createStyles({
  root: {
    height: '100%',
    width: 280,
    backgroundColor: '#f1f1f1',
    padding: '25px 15px 0px',
    position: 'fixed',
  },
  toolbar: {
    padding: spacing(0, 6),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
  iconBtn: {
    backgroundColor: palette.common.white,
    color: '#475a6b',
    marginRight: spacing(3),

    '&:hover': {
      backgroundColor: darken(palette.common.white, 0.08),
    },
  },
  rectangleBtn: {
    height: 48,
    width: 170,
    padding: '8px 10px',
    borderRadius: 22.5,
    backgroundColor: palette.common.white,
    justifyContent: 'space-between',

    '&:hover': {
      backgroundColor: darken(palette.common.white, 0.08),
    },

    '& .avatar': {
      height: 30,
      width: 30,
      fontSize: 15,
      fontWeight: 'bold',
      color: palette.text.primary,
      backgroundColor: '#eee',
    },
    '& .name': {
      fontWeight: 'bold',
      lineHeight: '15px',
    },
    '& .role': {
      fontSize: 12,
      lineHeight: '12px',
      color: '#939393',
    },
  },
});

export default makeStyles(styles);
