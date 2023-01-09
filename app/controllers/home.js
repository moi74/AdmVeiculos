const { application } = require("express");

module.exports.index = function(application, req, res){
    let connection = application.config.dbConnection();
    let veiculosModel = new application.app.models.VeiculosDAO(connection);

    veiculosModel.getVeiculos(function(err, result){
        if(err){
            res.status(500).send(err);
        } else {
            res.render("index", {veiculos: result});
        }
    });
}

module.exports.cadastro = function(application, req, res){
    res.render('cadastro_form', {validacao: {}, dadosForm: {}});
}

module.exports.veiculo = function(application, req, res){
    let connection = application.config.dbConnection();
    let veiculosModel = new application.app.models.VeiculosDAO(connection);
    let id_veiculo = req.query;

    console.log(id_veiculo);

    veiculosModel.getVeiculo(id_veiculo, function(err, result){
        if(err){
            res.status(500).send(err);
        } else if(result.length < 1){
            res.status(404).send("Page not found");
        } else {
            res.render('veiculo', {veiculo: result})
        }
    })
}

module.exports.editar = function(application, req, res){
    let connection = application.config.dbConnection();
    let veiculosModel = new application.app.models.VeiculosDAO(connection);
    let id_veiculo = req.query;

    veiculosModel.getVeiculo(id_veiculo, function(err, result){
        if(err){
            res.status(500).send(err);
        } else if(result.length < 1) {
            res.status(404).send("Page not found");
        } else {
        res.render('atualiza_cadastro', {dadosForm: result, validacao: {}});
        }
    });
}