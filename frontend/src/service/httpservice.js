import axios from 'axios'

//trabalhando com erros de promessas - funcao pega em projeto anterior
axios.interceptors.response.use(null, (error) => {
  const errosEsperados =
    error.response && error.response.status >= 400 && error.status < 500

  if (!errosEsperados) {
    console.log('Erro', error)
    alert('Algo inexperado aconteceu');
  }

  return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}

