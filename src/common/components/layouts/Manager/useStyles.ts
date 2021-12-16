import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = ({ palette, shape, spacing }: Theme) => createStyles({
  content: {
    marginLeft: 280,
  },
  container: {
    padding: spacing(13.2, 6, 0),
  },
});

export default makeStyles(styles);
