import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = ({ palette, shape, spacing }: Theme) => createStyles({
  root: {
    display: 'flex',

    '& p': {
      color: '#939393',
    },

    '& .inputContainer': {
      width: 441,

      '& > div': {
        marginBottom: spacing(6),
      },
    },
    '& .addressContainer': {
      '& .card': {
        height: 126,
        width: 441,
        boxShadow: '0 2px 10px 0 rgba(160, 161, 188, 0.25)',
        borderRadius: shape.borderRadius,
        padding: '19px 20px 20px',
        marginBottom: spacing(3),
        display: 'flex',

        '&:last-child': {
          marginBottom: 'unset',
        },

        '& img': {
          height: 35,
          width: 35,
        },
        '& > div': {
          marginLeft: spacing(7),
          flexGrow: 1,
        },
      },
    },
  },
});

export default makeStyles(styles);
