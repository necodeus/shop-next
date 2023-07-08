export default async function handler(req, res) {
    const response =  await fetch(`${process.env.API_URI}/shop/components/order/make`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + process.env.API_USER_TOKEN, 
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .catch(err => console.error(err));

    return res.status(response.statusCode).json(response);
}
