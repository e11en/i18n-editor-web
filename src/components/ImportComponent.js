import { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import useImport from "hooks/useImport";

const useStyles = makeStyles(() => ({
  dialog: {
    "& .MuiPaper-root": {
      padding: "1em",
      "& > div, & > button": {
        margin: "1em 0",
      },
    },
  },
  text: {
    margin: "0",
    color: "#a9a9a9",
  },
}));

const ImportComponent = ({ open, onClose }) => {
  const classes = useStyles();
  const { onFileChange } = useImport();
  const [language, setLanguage] = useState("");
  const [isPrimary, setIsPrimary] = useState(true);
  const [file, setFile] = useState();

  const onImport = () => {
    onFileChange(file, language, isPrimary);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className={classes.dialog}>
      <TextField
        label="Language"
        variant="outlined"
        value={language}
        fullWidth
        onChange={(e) => setLanguage(e.target.value)}
      />
      {file?.target?.files[0] && (
        <span className={classes.text}>{file?.target?.files[0].name}</span>
      )}
      <Button component="label" variant="contained" color="secondary" fullWidth>
        Select file
        <input type="file" hidden accept=".json" onChange={setFile} />
      </Button>
      <FormControlLabel
        control={<Checkbox checked={isPrimary} />}
        label="Is primary"
      />

      <Button onClick={onImport} variant="contained" color="primary">
        Import
      </Button>
    </Dialog>
  );
};

export default ImportComponent;
