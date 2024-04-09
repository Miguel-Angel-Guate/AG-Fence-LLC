import { FormData } from "./types";

export function sendEmail(data: FormData) {
    const apiUrl = process.env.API_URL;
    const apiEndpoint = '/api/email';

    fetch(`${apiUrl}/api/email`, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            alert(response.message);
        })
        .catch((err) => {
            alert(err);
        });
}