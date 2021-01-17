import { myBaseEnderecos } from './Database';
  
export const openConnectionDB = (operacao) => {
    //ABRE E FECHA CONEXÃO COM O BANCO
    console.log('Conexão aberta');  
    () => operacao;
    console.log('Conexão fechada'); 

};

export const saveCep = (obj) => {
    myBaseEnderecos.push({
        "rua": `${obj.rua}`,
        "bairro": `${obj.bairro}`,
        "uf": `${obj.uf}`,
      });
    console.log("save cep")
};

export const queryCep =  (id) => {

    const cep = myBaseEnderecos[id];

    console.log(`id:${id}, rua:${cep.rua}, bairro:${cep.bairro}, uf:${cep.uf}`);

    return(`id:${id}, rua:${cep.rua}, bairro:${cep.bairro}, uf:${cep.uf}`);

};