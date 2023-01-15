import api from './api';


export async function GetListPeople() {
  try {
    const response = await api.get('/sorteio/get');
    return response.data;

  } catch (error) {

    console.log('nao tem ERROR', JSON.stringify(error));

  }
}

export async function GetWinners() {
  try {
    console.log('cheguei aqui na service')

    const response = await api.get('/sorteio/getwinners');
    console.log('retornei do sorteio',response.data )

    return response.data;
    
  } catch (error) {

    console.log('Erro ao buscar ganhadores', JSON.stringify(error));

  }
}
