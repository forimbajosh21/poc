import { makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';

const styles = ({ spacing, shape, palette }: Theme) => createStyles({
  title: {
    position: 'relative',

    '& h2': {
      fontWeight: 'bold',
    },
    '& button': {
      position: 'absolute',
      right: spacing(4),
      top: spacing(4),
    },
  },
  content: {
    paddingTop: spacing(6),

    '& .pricing': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing(6),

      '& > div': {
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit',
        flexDirection: 'column',

        '& > p': {
          color: '#939393',
          marginBottom: spacing(1),
        },
        '& > div': {
          height: 104,
          width: 192,
          borderRadius: shape.borderRadius,
          border: 'solid 1px #DCDCDC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          '& p': {
            fontWeight: 'bold',
          },
        },
      },
      '& > span': {
        fontSize: 20,
        fontWeight: 'bold',
        padding: spacing(7, 4, 0),
      },
    },
    '& .success': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      marginBottom: spacing(6),

      '& svg': {
        fontSize: 60,
      },
      '& h6': {
        fontWeight: 'bold',
      },
    },
    '& .error': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      marginBottom: spacing(6),

      '& svg': {
        fontSize: 60,
      },
      '& h6': {
        fontWeight: 'bold',
      },
    },
    '& .accordationContainer': {
      marginBottom: spacing(6),
    },
    '& .claimBtn': {
      marginBottom: spacing(4),
    },
  },
});

export default makeStyles(styles);
