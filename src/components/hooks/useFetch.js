// hooks/useFetch.js
'use client';

import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch');
        const json = await res.json();
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  const FallbackUI = ({ children }) => {
    if (loading) return <div className="text-black text-start">Loading...</div>;
    if (error) return <div className="text-red-500 text-start">Error: {error}</div>;
    return children(data);
  };

  return { data, loading, error, FallbackUI };
}
