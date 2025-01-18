import React, { useEffect, useState } from "react";
import "./ListWithLoadStyles.css";
export default function ListwithLoadMoreButton() {
  const [data, setData] = useState([]);
  const[visibleData, setVisibleData] = useState([]); 
  const[visibleCount, setVisibleCount] = useState(5);
  const[loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res.products);
        setData(res.products);
        setVisibleData(res.products.slice(0,5));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMore = () => {
    setLoading(true);
    setTimeout(() => {
        const nextCount = visibleCount + 5;
        setVisibleCount(nextCount);
        setVisibleData(data.slice(0,nextCount));
        setLoading(false);
    },500);
  }
  return (
    <div className="mainContainer">
      <div className="headerName">ListwithLoadMoreButton</div>
      <div className = "Proucts">
      {visibleData.map((itm, index) => (
        <div key={index} className="ProductContainer">
          <img src={itm.images[0]} width={20} height={20} />
          <span className="title">{itm.title}</span>
        </div>
      ))}
      </div>
      {visibleData.length < data.length && (
        <button onClick={handleMore} disabled={loading} className="loadMoreButton">{loading ? "Loading..." : "Show More"}</button>
      )}
    </div>
  );
}
