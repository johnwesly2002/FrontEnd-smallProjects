import React, { useEffect, useState } from 'react';
import "./InfiniteScrollListStyles.css";

export default function InfiniteScrollListExample() {
  const [rawData, setRawData] = useState([]);
  const [List, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [pages, setPages] = useState(5);

  useEffect(() => {
    // Fetch the raw data only once
    fetch(`https://dummyjson.com/products`)
      .then((resp) => resp.json())
      .then((res) => setRawData(res?.products))
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    if (rawData.length > 0) {
      fetchData();
    }
  }, [rawData]);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    try {
      const data = rawData.slice(List.length, List.length + pages); // Fetch next slice of data
      setList((prev) => [...prev, ...data]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, List]);

  return (
    <div className='mainContainer'>
      <span className="headingText">InfiniteScrollListExample</span>
      <div className="productsContainer">
        {List.map((itm, index) => (
          <div className="ImageContainer" key={index}>
            <img src={itm.images[0]} alt={itm.title} />
            <p>{itm.title}</p>
          </div>
        ))}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {isError.message}</p>}
      </div>
    </div>
  );
}
