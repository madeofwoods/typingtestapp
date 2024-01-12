import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
    console.log("called");
  }, [navigate]);
  return <div>Error</div>;
};

export default Error;
