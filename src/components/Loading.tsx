import { Backdrop, CircularProgress } from "@mui/material";

const Loading = ({ isLoading }: Record<"isLoading", boolean>) => {
  return (
    <Backdrop
      open={isLoading}
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        "z-index": 10000,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        opacity: "1",
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
