import { createMuiTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Nanum Gothic',
    },
    palette: {
        primary: {
            main: '#313131'
        },
        secondary: {
            main: '#8ec5fc',
        }
    },
});

export default theme;