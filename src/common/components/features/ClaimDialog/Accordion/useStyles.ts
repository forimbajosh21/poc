import { makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';

const styles = ({ spacing, shape, palette }: Theme) => createStyles({
  accordion: {
    '&:before': {
      display: 'none',
    },
    '& .summary': {

      '& > div': {
        alignItems: 'center',
        fontWeight: 'bold',
      },

      '& .icon': {
        marginRight: spacing(2),
        backgroundColor: '#f8f8f8',
        borderRadius: shape.borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 5px 8px 6px',

        '& svg': {
          fontSize: 15,
        },
      },
    },
    '& .details': {
      borderRadius: shape.borderRadius,
      border: 'solid 1px #dcdcdc',
      padding: spacing(2),
    },
  },
});

export default makeStyles(styles);
