import network from '../Utilities/network';

const REFRESH_URL = "/auth/refreshToken";

/**
 * Function to grab an authentification token from server
 * @returns function
 */
function useRefreshAuth() {

    const refresh = async () =>{
        const response = await network.get(REFRESH_URL)
        return response.data
    }
    return refresh; 
}

export default useRefreshAuth;