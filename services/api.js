import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

const api = axios.create({
    baseURL: 'https://localhost:44363/api/',
});

api.interceptors.response.use(
  response => {
    return response
  },
  error => {

    if (
      error.request._hasError === true &&
      error.request._response.includes('connect')
    ) {
      <Alert key={55959} variant={variant}>
        'Não foi possível conectar aos nossos servidores, sem conexão a internet',
    </Alert>
    }


    return Promise.reject(error)
  },
)

export default api;