import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

import { getFiles } from "state/selectors";

const useStyles = makeStyles(() => ({
  wrapper: {
    marginTop: "50px",
    padding: "1em",
  },
}));

const ContentComponent = () => {
  const classes = useStyles();
  const files = useSelector(getFiles);
  const [fields, setFields] = useState();

  useEffect(() => {
    const primaryFile = files?.filter((f) => f.isPrimary)[0];
    if (!primaryFile) return;

    const keys = getKeys(primaryFile, "data");
    setFields(keys);
  }, [files]);

  const getKeys = (data, field) => {
    const keys = [];
    Object.keys(data[field]).forEach((f) => {
      const hasChildren = typeof data[field][f] === "object";
      let children = [];
      if (hasChildren) children = getKeys(data[field], f);

      const key = {
        name: f,
        hasChildren,
        children,
      };

      keys.push(key);
    });

    return keys;
  };

  const getLanguageCells = (key, i) => {
    return files.map((file, index) => (
      <td key={`${key.name}-${i}-${index}`}>
        <TextField
          name={`${key.name}-${file.language}`}
          defaultValue={file.data[key.name]}
          variant="outlined"
        />
      </td>
    ));
  };

  return (
    <div className={classes.wrapper}>
      <table>
        <tbody>
          {fields &&
            fields
              .filter((k) => !k.hasChildren)
              .map((k, index) => (
                <tr key={k.name}>
                  <td>
                    <TextField
                      name={`${k.name}`}
                      defaultValue={k.name}
                      variant="outlined"
                    />
                  </td>
                  {getLanguageCells(k, index)}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentComponent;
