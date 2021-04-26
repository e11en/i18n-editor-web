import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    marginTop: "50px",
    padding: "1em",
  },
}));

const ContentComponent = () => {
  const classes = useStyles();

  return <div className={classes.wrapper}>TODO: show all the fields here</div>;
};

export default ContentComponent;
