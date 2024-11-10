import React, { useEffect, useState } from 'react'

export const useFetch = (initialValue, url) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setData(data)
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(err.message)
        setData(initialValue);
      })
  }, []);

  return {
    data,
    isLoading,
    errorMessage
  }
}