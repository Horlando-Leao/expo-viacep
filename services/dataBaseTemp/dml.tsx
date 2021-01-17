import { myBaseEnderecos } from './Database';

export const saveCep = (obj) => {
    myBaseEnderecos.push({
        "rua": `${obj.rua}`,
        "bairro": `${obj.bairro}`,
        "uf": `${obj.uf}`,
      });
    console.log("save cep")
};

export const queryCep =  (id) => {

  try {
    const cep = myBaseEnderecos[id];

    console.log(`id:${id}, rua:${cep.rua}, bairro:${cep.bairro}, uf:${cep.uf}`);

    return(`id:${id}, rua:${cep.rua}, bairro:${cep.bairro}, uf:${cep.uf}`);
    
  } catch (error) {
    console.log("CATH:", error);
    return `false`;

  }
};

export const queryCepAll =  (id) => {

  return myBaseEnderecos;

};

