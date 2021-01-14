import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
createStyles({
    
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
      width: '100%',
    },
  },
  inputRoot: {
    fontSize: 30
  },
  labelRoot: {
    fontSize: '30px',
    color: "black",
    "&$labelFocused": {
      color: "purple"
    }
  },
  labelFocused: {},
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}),
);