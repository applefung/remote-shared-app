import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { useFormik } from "formik";

interface SearchBarParams {
  placeholder: string;
  onSubmit: (values: Record<"search", string>) => void;
}

const SearchBar = ({ placeholder, onSubmit }: SearchBarParams) => {
  const { handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        name="search"
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": placeholder }}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
