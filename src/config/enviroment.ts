let CONFIG = {
  appEnv: '',
  API_ENDPOINT: ''
};

if (process.env.REACT_APP_ENV === 'production') {
  CONFIG = {
    appEnv: 'production',
    API_ENDPOINT: 'production'
  };
}

if (process.env.REACT_APP_ENV === 'staging') {
  CONFIG = {
    appEnv: 'staging',
    API_ENDPOINT: ''
  };
}
if (process.env.REACT_APP_ENV === 'development') {
  CONFIG = {
    appEnv: 'development',
    API_ENDPOINT: 'http://localhost:3000/'
  };
}

export default Object.freeze(CONFIG);
