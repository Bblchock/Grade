import axios from "axios";
import "./Request.css";
import { useState } from "react";
import { useEffect } from "react";

const Request = () => {
  const [items, setitems] = useState();
  const [error, setError] = useState(undefined);

  useEffect(() => {
    axios
      .get("https://62e90ee0249bb1284eb96781.mockapi.io/items")
      .then(({ data }) => {
        setitems(data);
        setError(undefined);
      })
      .catch(err => {
        setError(`Ошибка: ${err.response.data}`);
        setitems(undefined);
      });
  }, []);

  return (
    <div className="items">
      Request
      {items ? (
        items.map(item => <div key={item.id}>{item.title}</div>)
      ) : (
        <div>'Ожидаем ответ с сервака'</div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Request;
