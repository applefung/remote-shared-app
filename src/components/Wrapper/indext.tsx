import { ReactNode, useEffect, useState } from "react";

import MainContent from "./MainContent";
import { Provider } from "react-redux";
import { store } from "../../stores/global";
import { useNavigate } from "react-router-dom";

interface WrapperProps {
  title: string;
  children: ReactNode;
  isAuth?: boolean;
}

const Wrapper = ({ isAuth = false, ...restProps }: WrapperProps) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (isAuth) {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }
      setIsLogin(true);
    }
  }, []);

  console.log("oh yes,i m in shared app", store);

  return !isAuth || isLogin ? (
    <Provider store={store}>
      {!isAuth || (isLogin && <MainContent {...restProps} />)}
    </Provider>
  ) : (
    <div />
  );
};

export default Wrapper;
