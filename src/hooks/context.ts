import { GlobalContext } from "../providers/context";
import { useContext } from "react";

export const useGlobalContext = () => useContext(GlobalContext);