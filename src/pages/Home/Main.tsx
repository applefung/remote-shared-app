import { Button } from "@mui/material";
import SearchBar from "../../components/SearchBar";
import { increment } from "../../reducers";
import { setLoading } from "../../reducers/ui";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";

const Main = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(increment())}>{count}</Button>
      <Button onClick={() => dispatch(setLoading(true))}>Loading on</Button>
      <Button onClick={() => dispatch(setLoading(false))}>Loading off</Button>
      <SearchBar
        placeholder="Search bar"
        onSubmit={(value) => console.log(value)}
      />
    </>
  );
};
export default Main;
