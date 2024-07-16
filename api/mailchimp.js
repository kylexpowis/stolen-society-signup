import fetch from 'node-fetch';
import { process } from 'node';

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email_address, status } = req.body;

    if (!email_address || !status) {
        return res.status(400).json({ error: 'Email and status are required' });
    }

    const LIST_ID = process.env.VITE_MAILCHIMP_LIST_ID;
    const REGION = process.env.VITE_MAILCHIMP_REGION;
    const API_KEY = process.env.VITE_MAILCHIMP_API_KEY;

    console.log('VITE_MAILCHIMP_REGION:', process.env.VITE_MAILCHIMP_REGION);
    console.log('VITE_MAILCHIMP_LIST_ID:', process.env.VITE_MAILCHIMP_LIST_ID);
    console.log('VITE_MAILCHIMP_API_KEY:', process.env.VITE_MAILCHIMP_API_KEY);

    if (!LIST_ID || !REGION || !API_KEY) {
        return res.status(500).json({ error: 'Environment variables are not set' });
    }

    const response = await fetch(`https://${REGION}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
            email_address,
            status,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        return res.status(response.status).json(data);
    }

    res.status(200).json(data);
};
