import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CastomTextField = styled(TextField)({
  '& ': {
    marginBottom: '20px',
    minWidth: '240px',
  },
  '& label': {
    color: '#af4747',
    fontFamily: 'Verdana',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '1.4',
    letterSpacing: '0.04em',
  },
  '& label.Mui-focused': {
    color: '#a14545',
  },
  '& .MuiInput-underline:before': {
    borderBottom: '1px solid #E0E0E0',
  },

  '& .MuiInput-underline:after': {
    borderBottomColor: '#a14545',
  },
});

export { CastomTextField };
