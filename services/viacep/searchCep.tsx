import axios from 'axios';

import { saveCep } from '../dataBaseTemp/dml';
import { printAll } from '../dataBaseTemp/tools';


export const getAddress = async (cep) => {
  const response = await axios.get(`http:viacep.com.br/ws/${cep}/json`);

  const endereco = {
      rua: response.data.logradouro,
      complemento: response.data.complemento,
      bairro: response.data.bairro,
      localidade: response.data.localidade,
      uf: response.data.uf
  };
  console.log('consulta endereço: ', endereco);

  saveCep({rua: endereco.rua, bairro: endereco.bairro, uf:endereco.uf});

  printAll();
  
  return endereco;
  
};