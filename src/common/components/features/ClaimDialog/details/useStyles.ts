import { makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';

const styles = ({ spacing, shape, palette }: Theme) => createStyles({
  container: {
    width: '100%',

    '& > div': {
      minHeight: 44,
      marginBottom: spacing(3),
      display: 'flex',
      alignItems: 'center',

      '& > div': {
        flexBasis: 0,
        flexGrow: 1,
        minWidth: 0,

        '& .nameContainer': {
          display: 'flex',
          alignItems: 'center',

          '& > div': {
            height: 30,
            width: 30,
            fontSize: 15,
            fontWeight: 'bold',
            marginRight: spacing(3),
            color: palette.text.primary,
            backgroundColor: '#eee',
          },
          '& > p': {
            fontWeight: 500,
          },
        },

        '& > p': {
          wordBreak: 'break-word',
        },
      },
    },
  },
});

export default makeStyles(styles);
