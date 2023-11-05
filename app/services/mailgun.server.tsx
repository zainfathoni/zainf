export const subscribe = async (email: string) => {
  const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
  const MAILGUN_MAILING_LIST = process.env.MAILGUN_MAILING_LIST;

  const formdata = new FormData();
  formdata.append("subscribed", "True");
  formdata.append("address", email);

  const headers = new Headers();
  const authorization = `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`;
  headers.append("Authorization", authorization);

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: formdata,
  };

  const url = `https://api.mailgun.net/v3/lists/${MAILGUN_MAILING_LIST}/members`;
  const response = await fetch(url, requestOptions);

  return response;
};
