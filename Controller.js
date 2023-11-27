const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models/index')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
let empresas=models.Empresas;

app.get('/empresa',async (req,res)=>{
    let read = await empresas.findAll({
        raw:true,
    });
    res.json(read);
    console.log(read);
});

let port = process.env.PORT || 5188;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando!');
});