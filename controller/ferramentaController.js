import { Ferramenta } from '../model/Ferramenta.js'
import { atualizar, cadastrar, listar, deletar, buscarPorId } from '../repository/ferramentaRepository.js';

export function cadastrarFerramenta(req, res) {
    const {codigo, descricao, estado} = req.body;

    const ferramenta = new Ferramenta(codigo, descricao, estado);

    cadastrar(ferramenta);

    res.status(201).json({mensagem:"Ferramenta cadastrada com sucesso"});
}


export function listarFerramenta(req, res) {
    const listaDeFerramentas = listar()

    res.status(201).json(listaDeFerramentas);
}

export function BuscarFerramentaPorId(req, res) {
    const indice = Number(req.params.indice)

    const categoria = buscarPorId(indice)
    if(!categoria) {
        return res.status(404).json({mensagem: 'Ferramenta nao encontrada'})
    }
    res.status(200).json(categoria)
}

export function atualizarFerramenta(req, res) {
    const indice = Number(req.params.indice)

    const ferramenta = buscarPorId(indice)

    if(!ferramenta) {
         return res.status(404).json({mensagem: 'Ferramenta nao encontrada'});
    }
    const {codigo, descricao, estado} = req.body;

    if(codigo != undefined) {
        ferramenta.codigo = codigo;
    }

    if(descricao != undefined) {
        ferramenta.descricao = descricao;
    }

    if(estado != undefined) {
        ferramenta.estado = estado;
    }

    const ferramentaNovo = new Ferramenta(codigo, descricao, estado);

    atualizar(ferramentaNovo);

    res.status(200).json({mensagem: 'Ferramenta atualizada com sucesso'});
}

export function deletarFerramenta(req, res){
    const indice = Number(req.params.indice);

    const ferramenta = buscarPorId(indice);

    if(!ferramenta) {
        return res.status(404).json({mensagem: 'Ferramenta nao encontrada'})
    }

    deletar(indice);

    res.status(204);
}