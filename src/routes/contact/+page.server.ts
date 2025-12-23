import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import nodemailer from 'nodemailer';
import {
	CLIENT_SECRET,
	CLIENT_ID,
	SENDER_EMAIL,
	ACCESS_TOKEN,
	REFRESH_TOKEN,
	RECIPIENT_EMAIL
} from '$env/static/private';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		if (data.get('email') === '' || data.get('email') === 'undefined') {
			fail(404);
			return;
		}

		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			auth: {
				type: 'OAuth2',
				user: SENDER_EMAIL,
				clientId: CLIENT_ID,
				clientSecret: CLIENT_SECRET,
				accessToken: ACCESS_TOKEN,
				refreshToken: REFRESH_TOKEN
			},
			tls: {
				ciphers: 'SSLv3'
			}
		});

		await new Promise((resolve, reject) => {
			transporter.verify(function(error, success) {
				if (error) {
					reject(error);
					fail(403);
				} else {
					var mailOptions = {
						from: SENDER_EMAIL,
						to: RECIPIENT_EMAIL,
						subject: `Contact enquiry from ${data.get('email')}`,
						text: `Contact enquiry from ${data.get('name')}  for  ${data.get('subject')} in regards to ${data.get('message')}. Kindly get back to the customer at ${data.get('email')} or ${data.get('phone')}`
					};

					transporter.sendMail(mailOptions, (error, info) => {
						if (error) {
							console.log(error);
							reject(fail(403));
						} else {
							console.log(info);
							resolve('Email Sent' + info.response);
							redirect(303, '/');
						}
					});
				}
			});
		});
	}
} satisfies Actions;
