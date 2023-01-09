const { MACROMAN_BIN } = require("mysql/lib/protocol/constants/charsets");

function VeiculosDAO(connection){
    this._connection = connection;
}

VeiculosDAO.prototype.getVeiculos = function(result){
    this._connection.query('select * from veiculos', result);
}

VeiculosDAO.prototype.getVeiculo = function(id_veiculo, result){
    this._connection.query('select * from veiculos where id =' + id_veiculo.id, result)
}

VeiculosDAO.prototype.excluir = function(id, result){
    this._connection.query('delete from veiculos where id=' + id.id, result);
}

VeiculosDAO.prototype.cadastrar = function(dadosForm, result){
    this._connection.query('insert into veiculos(placa, chassi, renavam, modelo, marca, ano) VALUES (?, ?, ?, ?, ?, ?)', 
    [dadosForm.placa, dadosForm.chassi, dadosForm.renavam, dadosForm.modelo, dadosForm.marca, dadosForm.ano], result) ;
}

VeiculosDAO.prototype.update = function(dadosForm, result){
    console.log(this._connection.query("update veiculos set placa = ?, chassi = ?, renavam = ?, modelo = ?, marca = ?, ano = ? where id = ?",
    [dadosForm.placa, dadosForm.chassi, dadosForm.renavam, dadosForm.modelo, dadosForm.marca, dadosForm.ano, dadosForm.id], result));
}

module.exports = function(){
    return VeiculosDAO;
}