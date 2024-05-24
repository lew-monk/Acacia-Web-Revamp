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
		console.log(data);

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

		transporter.verify(function(error, success) {
			if (error) {
				console.log(error);
				fail(403);
				return;
			} else {
				var mailOptions = {
					from: SENDER_EMAIL,
					to: RECIPIENT_EMAIL,
					subject: 'BOOKING ENQUIRY',
					text: `Booking enquiry from ${data.get('email')}  for period betwween ${data.get('checkIn')} to ${data.get('checkOut')} for ${data.get('adults')} adults and ${data.get('children')} children`
				};

				transporter.sendMail(mailOptions, (error, info) => {
					if (error) {
						console.log(error);
						fail(400);
					} else {
						console.log('Email Sent', info.response);
						redirect(303, '/');
					}
				});
			}
		});
	}
} satisfies Actions;
