// eslint-disable-next-line import/no-unresolved
import { Overrides } from '@material-ui/core/styles/overrides';

const overrides: Overrides = {
  MuiToolbar: {
    regular: {
      '@media(min-width: 600px)': {
        minHeight: 87,
      },
    },
  },
  MuiButton: {
    root: {
      textTransform: 'none',
    },
  },
};
export default overrides;
