const nodemailer = require('nodemailer');

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			
			host:"sandbox.smtp.mailtrap.io",
			port: 587,
			secure:false,
			auth: {
				user: "66bc11241b8a5d",
				pass: "94bd4f0d003ae7",
			},
			from: "66bc11241b8a5d",
		});

		await transporter.sendMail({
			from: "66bc11241b8a5d",
			to: email,
			subject: subject,
			text: text,
		});
		console.log('email sent successfully');
	} catch (error) {
		console.log('email not sent!');
		console.log(error);
		return error;
	}
};
