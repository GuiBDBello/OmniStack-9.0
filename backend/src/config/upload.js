const multer = require('multer');
const path = require('path');

module.exports = {
    // Forma de armazenamento de arquivos
    storage: multer.diskStorage({
        // Método do node que separa os diretórios referenciados em vários parâmetros
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        /*
         * O nome do arquivo recebe uma função, com a requisição, o arquivo e o callback
         *(função chamada quando o nome do arquivo estiver pronto)
         */
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            
            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};
