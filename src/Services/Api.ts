import axios from 'axios';

const BASE_URL_v1 = 'https://hub.mrkeno.app/api/v1';
const  BASE_DOMAIN = process.env.REACT_APP_DOMAIN;
const  BASE_SERVER = process.env.REACT_APP_SERVER;
const  BASE_ENDPOINT = 'https://'+BASE_SERVER+"." + BASE_DOMAIN + '/api';

export const v5 = axios.create({
  baseURL: `${BASE_ENDPOINT}/v5`,
  headers: { "Content-Type": "application/json" }
});

export const api_url = axios.create({
  baseURL: BASE_URL_v1,
});
const user = window.localStorage.getItem('@GDSK:user') ? window.localStorage.getItem('@GDSK:user') : undefined;


v5.defaults.headers.Authorization = user ? "Token " + JSON.parse(user).token : undefined;
v5.defaults.headers.common.Authorization = user ? JSON.parse(user).session_id : undefined;
v5.defaults.headers.common.sessao = user ? JSON.parse(user).session_id : undefined;

export const setToken = (token: string, sessao?: string) => {
  const Token = token ? `Token ${token}` : undefined;
  const session = sessao || undefined;

  v5.defaults.headers.Authorization = Token;
  v5.defaults.headers.common.Authorization = v5.defaults.headers.sessao = session;
  v5.defaults.headers.common.sessao = session;
};

export const setBaseUrl = (id: string, domain = BASE_DOMAIN) => {
  v5.defaults.baseURL = `https://${id}.${domain}/api/v5`;
};

export const getPreServer = () => {
  const server = v5.defaults.baseURL?.split('/api')[0].split('//')[1].replace('.app', '').split('.') || '';
  return `${server[0]} ${server[1]}`;
};

export default api_url;
