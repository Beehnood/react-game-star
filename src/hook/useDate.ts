import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";




interface IFetchResponse <T>{
  count: number;
  results: T[];
}

const useGenres = <T>(endpoint : string, requestConfig?:AxiosRequestConfig, deps?: any[]) => {
  const [data, setGenres] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    apiClient
      .get<IFetchResponse<T>>(endpoint, {...requestConfig})
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((errors) => {
        setError(errors.message);
        setIsLoading(false);
      });
  }, deps ? [...deps] : []);
  return { data, error, isLoading };
};
export default useGenres;
