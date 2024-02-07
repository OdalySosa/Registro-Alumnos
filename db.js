var db;
const funcdb = ()=>{
    let indexDB = indexedDB.open('db_sistema',1);
    indexDB.onupgradeneeded = e=>{
        let req = e.target.result,
            tblalumno = req.createObjectStore('alumnos',{keyPath:'id_alumno'});
        tblalumno.createIndex('id_alumno','id_alumno',{unique:true});
        tblalumno.createIndex('codigo','codigo',{unique:true});
    };
    indexDB.onsuccess = e=>{
        db = e.target.result;
    };
    indexDB.onerror = e=>{
        console.error('Error al crear la base de datos', e.message());
    };
}, abrirStore = (store, modo)=>{
    let ltx = db.transaction(store, modo);
    return ltx.objectStore(store);
};
funcdb();