import setCookie from 'set-cookie-parser';

export default async function handler(req, res) {
    let responsePromise;

    const responseData = await (responsePromise = await fetch(process.env.API_URI + '/sign-in/with-google?' + (req.url.split('?')[1] || ''), {
        headers: {
            'Authorization': 'Bearer ' + process.env.API_USER_TOKEN, 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'include',
    })).json();

    const { success, data, statusCode, message } = responseData;

    if (!success && statusCode) {
        res.status(statusCode);
        res.setHeader("Content-Type", 'application/json');
        return res.end(JSON.stringify(responseData));
    }

    if (data.redirectionUrl) {
        let splitCookieHeaders = setCookie.splitCookiesString(responsePromise.headers.get('set-cookie'))
        res.setHeader("Location", data.redirectionUrl);
        res.setHeader("Set-Cookie", splitCookieHeaders);
        // res.setHeader("Set-Cookie", "necodeo-session=" + data?.sessionKey);
        res.statusCode = 302;
    }

    return res.end();
}
