import { useState, useEffect } from "react";
import { api } from "../services/api";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    api.get(url)
    .then(response => {
      setData(response.data.coins.slice(0, 15));
    })
    .finally(() => {
      setIsFetching(false);
    })
  }, []);

  return { data, isFetching }
}