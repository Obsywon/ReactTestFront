import { useEffect, useContext } from "react";
import network from "../Utilities/network";
import useRefreshAuth from "./useRefreshAuth";
import AuthContext from "../Contexts/AuthContext";


/**
 * Requests passing through this hook end up having an access token, 
 * used authorize interactions with the API 
 * @returns Hook
 */
const useAxios = () => {
  const refresh = useRefreshAuth();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    // check if axios sends accessToken, if it doesn't, add the token to request
    const reqIntercept = network.interceptors.request.use(
      config => {
        if (!config.headers['Authorization']) config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
        return config;

      },
      (error) => {
        Promise.reject(error);
      }
    );

    // check if forbidden access (due to absence of token) -> if yes, then retry the request with a new token once
    const resIntercept = network.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const prevReq = error?.config;
        if (error?.response?.status === 403 && !prevReq?.sent) {
          prevReq.sent = true;
          const dataUser = await refresh();
          prevReq.headers["Authorization"] = `Bearer ${dataUser.accessToken}`;
          return network(prevReq);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      network.interceptors.response.eject(resIntercept);
      network.interceptors.request.eject(reqIntercept);
    };
  }, [auth, refresh]);

  return network;
};

export default useAxios;
