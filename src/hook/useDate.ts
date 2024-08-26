import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Platform } from "./useGame";



interface FetchResponse <T>{
  count: number;
  results: T[];
}

const useGenres = <T>(endpoint : string) => {
  const [data, setGenres] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((errors) => {
        setError(errors.message);
        setIsLoading(false);
      });
  }, []);
  return { data, error, isLoading };
};
export default useGenres;
