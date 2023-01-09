module.exports = function(application){
    application.get('/excluir', function(req, res){
        application.app.controllers.admin.excluir(application, req, res);
    });

    application.post('/salvar', function(req, res){
        application.app.controllers.admin.salvar(application, req, res);
    });
}

