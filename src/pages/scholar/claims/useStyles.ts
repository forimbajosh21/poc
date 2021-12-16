import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = ({ palette, shape, spacing }: Theme) => createStyles({
  searchbarContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: spacing(6),

    '& h6': {
      fontWeight: 'bold',
    },
    '& .searchIcon': {
      fontSize: 20,
      fill: '#939393',
    },
  },
  tableHead: {
    '& th': {
      fontWeight: 'bold',
    },
  },
  tableBody: {
    '& .avatar': {
      height: 30,
      width: 30,
      fontSize: 15,
      fontWeight: 'bold',
      marginRight: spacing(3),
      color: palette.text.primary,
      backgroundColor: '#eee',
    },
    '& .name': {
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
    },
  },
});

export default makeStyles(styles);
