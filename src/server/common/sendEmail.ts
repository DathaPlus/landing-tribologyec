import { ISendEmail } from '@interfaces/server/common/ISendEmail';

export const sendEmail = async (data: ISendEmail): Promise<void> => {
  try {
    const response = await fetch(
      `${process.env.BASE_PATH_WORDPRESS_BACKEND}/wp-json/wp/v2/send-mail`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${process.env.TOKEN_WORDPRESS_BACKEND}`,
          Accept: '*/*',
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) throw new Error(response.statusText);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};
