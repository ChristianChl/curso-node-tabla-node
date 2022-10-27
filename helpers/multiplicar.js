const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async(base = 5, l=false, h =10) => {

    try {

    
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= h; i++) {
    
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${colors.yellow(base)} x ${i} = ${colors.green(base * i)}\n`);
        }

        if(l){
            
            console.log(colors.green('==================='));
            console.log('    Tabla del: ', colors.yellow(base));
            console.log(colors.green('===================='));
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return (`tabla-${base}.txt`);
        
    } catch (err) {

        throw err;
        
    }


}

module.exports = {
    crearArchivo
}