import axios from 'axios';

import { create } from '../sqlite/Ceps';
import { findAll } from '../sqlite/Ceps';
import { findId } from '../sqlite/Ceps';

import { printCep } from '../sqlite/tools'

export const getAddress = async (cep) => {
  const response = await axios.get(`http:viacep.com.br/ws/${cep}/json`);

  const endereco = {
      rua: response.data.logradouro,
      complemento: response.data.complemento,
      bairro: response.data.bairro,
      localidade: response.data.localidade,
      uf: response.data.uf
  };
  console.log('log-1', endereco);

  create({rua: endereco.rua, bairro: endereco.bairro, uf:endereco.uf});

  findId(-1)
  .then(cep => printCep(cep))
  .catch(err => console.log(err))

  return endereco;
  
};