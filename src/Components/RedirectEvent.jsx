import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const RedirectEvent = ({ text, target }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let timer = setTimeout(() => {
      navigate(target);
      clearTimeout(timer);
    }, 2000);
  }, []);

  return (
    <>
      <p>{text}</p>
      <Spinner />
    </>
  );
};

export default RedirectEvent;
