import { Button } from "@mui/material";
import SearchBar from "../../components/SearchBar";
import { increment } from "../../reducers";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";

const Main = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(increment())}>{count}</Button>
      <SearchBar
        placeholder="Search bar"
        onSubmit={(value) => console.log(value)}
      />
    </>
  );
};
export default Main;
