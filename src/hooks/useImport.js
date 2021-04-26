import { useDispatch } from "react-redux";

import { AddFile, SetLoading } from "state/actions";

const useImport = () => {
  const dispatch = useDispatch();
  const reader = new FileReader();

  const importJson = (fileContent, language, isPrimary) => {
    const json = JSON.parse(fileContent);
    dispatch(AddFile({ language, isPrimary, data: json }));
  };

  const onFileChange = (e, language, isPrimary) => {
    SetLoading(true);
    const file = e?.target?.files[0];
    if (!file) return;

    reader.onload = (e) => {
      importJson(e.target.result, language, isPrimary);
      SetLoading(false);
    };
    reader.readAsText(file);
  };

  return {
    onFileChange,
  };
};

export default useImport;
