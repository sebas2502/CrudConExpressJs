// Importando modulos //
const express = require('express');
const app = express();
const mysql = require('mysql');


//Midlewares
app.use(express.static('public'));
app.set('view engine','ejs');  // seteamos el motor de plantilla a usar
app.set('views',__dirname + '/public/views'); //Unimos los directorios 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Creando la conexion a la base de datos con mysql
const conexion = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'PRUEBAS'
});


//Conectando a la base de datos
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conected to database PRUEBAS');
    }
});



// Creando las rutas y consultas SQL

//Vista raiz
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Express</h1>');
});

// Vista de todos los productos en base de datos
app.get('/listar',function(req,res){
    conexion.query('select * from articles',function(error,rows){
        if(error){
            throw error;
        }else{
            
      
            res.render('index',{data:rows});
           
        }
    });
})

//Funcion para eliminar un producto
app.get('/eliminar/:id', function(req,res){
    conexion.query('delete from articles WHERE id = ?',[req.params.id],function(error,results){
        if(error){
            throw error;
        }else{
            
           res.redirect('/listar');
          
        }
    });
});


//Funcion para insertar un nuevo producto
app.post('/insertar',function(req,res){
            
            
    let product = req.body;
    
            
    let sql = 'insert into articles set ?'
    conexion.query(sql,[product],function(error,results){
        if(error){
            throw error;
        }else{

            console.log(product);    
            res.redirect('/listar');
        }
    });
});


// Vista con el producto a editar
app.get('/editar/:id',function(req,res){

    const {id} = req.params
    conexion.query('select * from articles where id = ?',[id],function(error,rows){
        if(error){
            throw error;
        }else{
            
            res.render('editar',{data:rows});
         
        }
    });
    
  
});

// Funcion para editar el producto
app.post('/editarProducto/:id',function(req,res){
    
    let id = req.params.id
    let productEdited = req.body
    
    conexion.query('update articles set ? where id = ?',[productEdited,id],function(error,rows){
        if (error){
            throw error;
        }else{
            res.redirect('/listar');
        }
    });
   

})


// Puerto donde va a escuchar el servidor
app.listen(8000,function(error){
   
        if(error){
            throw error;
        }else{
            console.log('Server running on port 8000');
        }
});
