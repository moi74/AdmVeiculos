module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controllers.home.index(application, req, res);
    });

    application.get('/cadastro', function(req, res){
        application.app.controllers.home.cadastro(application, req, res);
    });

    application.get('/veiculo', function(req, res){
        application.app.controllers.home.veiculo(application, req, res);
    })

    application.get('/editar', function(req, res){
        application.app.controllers.home.editar(application, req, res);
    })
}

