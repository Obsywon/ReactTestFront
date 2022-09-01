import network from "./network";
const REGISTER_URL = "/auth/register";
const LOGIN_URL = "/auth/login";
const LOGOUT_URL = "/auth/logout";

/**
 * Register a new account
 * @param {*} param0 
 * @returns Promise
 */
export const registerNewAcccount = async ({ name, email, password, passwordConfirmed }) => {
    const response = await network.post(
        REGISTER_URL,
        JSON.stringify({
            username: name,
            email: email,
            password: password,
            passwordConfirmed: passwordConfirmed,
        }
        ));
    return response
}


/**
 * Login account
 * @param {*} param0 
 * @returns Promise
 */
export const loginAccount = async ({ email, password }) => {
    const req = await network.post(
        LOGIN_URL,
        JSON.stringify({
            email: email,
            password: password,
        })
    );
    return req;
}

/*
export const getAllUsers = async () => {
    const request = await network.get(ALL_USERS_URL)
    return request
}
*/

export const logoutAccount = async () =>{
    const response = await network.get(LOGOUT_URL);
    return response
}