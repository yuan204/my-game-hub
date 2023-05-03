import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default function useData<T>(endpoint: string, config?: AxiosRequestConfig, deps?: any[]) {
  const [data, setData] = useState<T[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
      const abortController = new AbortController();
      setIsLoading(true)
    apiClient
      .get<FetchResponse<T>>(endpoint, {signal: abortController.signal, ...config})
      .then((res) => {
        setData(res.data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setErr(err.message);
        setIsLoading(false)
      })
    return () => abortController.abort()
  }, deps ? deps : []);

  return { data, err, isLoading }
}
