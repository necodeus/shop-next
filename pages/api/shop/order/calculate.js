import axios from 'axios';

export default async function handler(req, res) {
    const response = await axios.post(process.env.API_URI + '/shop/components/order/calculate');

    res.status(res.response.status).json(response.data);
}
