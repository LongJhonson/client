import { BASE_PATH, API_VERSION } from "./config";

export function suscribeNewsletterApi(email) {

    const url = `${BASE_PATH}/${API_VERSION}/subscribe-newsletter/${email}`;

    const params = {
        method: "POST"
    };

    return fetch(url, params).then(response => {
        return response.json()
    }).then(result => {
        return result
    }).catch(err => {
        return err;
    })
}