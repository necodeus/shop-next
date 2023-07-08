export default async function handler(req, res) {
    const include = req.query.include;
    const response =  await fetch(`${process.env.API_URI}/shop/components/products?include=${include}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + process.env.API_USER_TOKEN, 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then(response => response.json())
        .catch(err => console.error(err));

    return res.status(response.statusCode).json(response);
}
