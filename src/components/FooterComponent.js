import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import GetAppIcon from "@material-ui/icons/GetApp";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: 0,
    width: "calc(100vw - 2em)",
    padding: "1em",
    position: "absolute",
    backgroundColor: "#f9f9f9",
    "& > *": {
      margin: "1em",
    },
  },
}));

const FooterComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Button startIcon={<AddIcon />} variant="contained" color="primary">
        Create project
      </Button>
      <Button startIcon={<LanguageIcon />} variant="contained" color="primary">
        Add language
      </Button>
      <Button startIcon={<GetAppIcon />} variant="contained" color="primary">
        Import file
      </Button>
    </div>
  );
};

export default FooterComponent;
