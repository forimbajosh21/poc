import { darken, makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';

import AxieManager from 'common/assets/images/axie-manager.png';
import AxieScholar from 'common/assets/images/axie-scholar.png';

const styles = ({ palette, shape, spacing }: Theme) => createStyles({
  root: {
    height: '100%',
    width: 280,
    backgroundColor: '#f1f1f1',
    padding: '25px 15px 0px',
    position: 'fixed',
  },
  logo: {
    width: 236,
    height: 60,
    margin: '0 7px 66px',
    objectFit: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  logoManager: {
    backgroundImage: `url(${AxieManager})`,
  },
  logoScholar: {
    backgroundImage: `url(${AxieScholar})`,
  },
  listBtn: {
    height: 38,
    borderRadius: shape.borderRadius,
    marginBottom: spacing(3),

    '& span': {
      fontWeight: 500,
    },
  },
  active: {
    backgroundColor: palette.primary.main,
    color: palette.common.white,
    '&:hover': {
      backgroundColor: palette.primary.dark,
    },

    '& svg': {
      color: palette.common.white,
    },
  },
  listIcon: {
    minWidth: 35,
    '& svg': {
      fontSize: 20,
    },
  },
});

export default makeStyles(styles);
