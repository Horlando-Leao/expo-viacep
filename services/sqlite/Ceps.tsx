import db from './SQLiteDatabase';

db.transaction(tx => {

    tx.executeSql(
        "DROP TABLE ceps;"
    );

    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS ceps (id INTEGER PRIMARY KEY AUTOINCREMENT, rua TEXT, bairro TEXT, uf TEXT);"
    );
});

export const create = (obj) => {
    return new Promise( (resolve, reject ) =>{

        db.transaction(
            tx =>{
                tx.executeSql("INSERT INTO ceps (rua, bairro, uf) valures (?, ?, ?);", [obj.rua, obj.bairro, obj.uf],
                
                (_,{rowsAffected, insertId}) =>{
                    if(rowsAffected > 0){
                        resolve(insertId);
                    }else{
                        reject('Error insert obj:' + JSON.stringify(obj)); //insert falhou
                    }
                    error => reject(error); //erro interno em tx.executavel
                }

                );
            }
        );
    });
}


export const findAll = () =>{
    return new Promise((resolve, reject) => {

        db.transaction(
            tx => {

                tx.executeSql("Select * FROM ceps"), [],

                (_,{rows}) => {
                    if(rows.lenght > 0){
                        resolve(rows._array)
                    }else{
                        reject('No have objs');
                    }
                    error => reject(error);
                }
            }
        )
    })

}

export const findId = (id) =>{
    return new Promise((resolve, reject) => {

        db.transaction(
            tx => {

                tx.executeSql("Select * FROM ceps WHERE id=?"), [id],

                (_,{rows}) => {
                    if(rows.lenght > 0){
                        resolve(rows._array[0])
                    }else{
                        reject('No have objs where id:'+id);
                    }
                    error => reject(error);
                }
            }
        )
    })

}

