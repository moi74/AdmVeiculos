module.exports.excluir = function(application, req, res){
    let connection = application.config.dbConnection();
    let veiculosModel = new application.app.models.VeiculosDAO(connection);
    let id = req.query;

   veiculosModel.excluir(id, function(err, result){
        if(err){
            res.status(500).send(err);
        } 
        res.render("sucesso");
    });

}

module.exports.salvar = function(application, req, res){
    var dadosForm = req.body;
    let connection = application.config.dbConnection();
    let veiculosModel = new application.app.models.VeiculosDAO(connection);


    req.assert('placa', 'Placa é obrigatória.').notEmpty();
    req.assert('placa', 'A placa deve conter 7 caracteres.').len(7, 7);
    req.assert('chassi', 'Chassi é obrigatório.').notEmpty();
    req.assert('chassi', 'Chassi deve conter 17 caracteres.').len(17, 17);
    req.assert('renavam', 'Renavam é obrigatório.').notEmpty();
    req.assert('renavam', 'Renavam deve conter 11 caracteres.').len(11, 11);
    req.assert('modelo', 'Modelo é obrigatório.').notEmpty();
    req.assert('marca', 'Marca é obrigatória.').notEmpty();
    req.assert('ano', 'Ano é obrigatório.').notEmpty();

    var erros = req.validationErrors();

    if(dadosForm.acao == "cadastrar"){
        if(erros){
            res.render('cadastro_form', {validacao: erros, dadosForm: dadosForm})
            res.status(400).send("Verificar os campos do formulário.");
            return;
        }

        veiculosModel.cadastrar(dadosForm, function(err, result){
            if(err){
                res.status(500).send(err);
            }
            res.render('sucesso');
        });

    } else {
        console.log(dadosForm);
        if(erros){
            res.render('cadastro_form', {validacao: erros, dadosForm: dadosForm})
            res.status(400).send("Verificar os campos do formulário.");
            return;
        } else {
            if(dadosForm.acao == "salvar"){
                veiculosModel.update(dadosForm, function(err, result){
                    if(err){
                        throw err;
                    }
                    res.render('sucesso');
                });
            } else {
                res.status(500).send(err);
            }
        }
    }

    
}
