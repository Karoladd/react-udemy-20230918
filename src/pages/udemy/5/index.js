import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));

/* node  src/pages/udemy/5/index.js */