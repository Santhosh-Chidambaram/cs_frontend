import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Protected({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return (
      <div className='container mt-2'>
        <h1> Loading ...</h1>
      </div>
    );
  }
  return <div>{children}</div>;
}
