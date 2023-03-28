import axios from "axios";
import "./Request.css";
import { useState } from "react";
import { useEffect } from "react";

const Request = () => {
  const [items, setItems] = useState();
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://62e90ee0249bb1284eb96781.mockapi.io/items")
      .then(response => {
        if (response.status === 200) {
          setItems(response.data);
          setError(undefined);
        }
      })
      .catch(err => {
        setError(err.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="items">
      Request
      {error || isLoading ? (
        <div className="error">
          {error ? `Ошибка: ${error}` : "Ожидаем ответ сервера"}
        </div>
      ) : (
        items?.slice(0, 3).map(item => <div key={item.id}>{item.title}</div>)
      )}
    </div>
  );
};

export default Request;
