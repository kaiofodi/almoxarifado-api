import { Colaborador } from '../model/Colaborador.js'
import { atualizar, cadastrar, listar, deletar, buscarPorId } from '../repository/colaboradorRepository.js';

export function cadastrarColaborador(req, res) {
    const {nome, matricula, setor} = req.body;

    const colaborador = new Colaborador(nome, matricula, setor);

    cadastrar(colaborador);

    res.status(201).json({mensagem:"Colaborador cadastrado com sucesso"});
}


export function listarColaborador(req, res) {
    const listaDeColaboradores = listar()

    res.status(201).json(listaDeColaboradores);
}

export function BuscarColaboradorPorId(req, res) {
    const indice = Number(req.params.indice)

    const colaborador = buscarPorId(indice)
    if(!colaborador) {
        return res.status(404).json({mensagem: 'Colaborador nao encontrada'})
    }
    res.status(200).json(colaborador)
}

export function atualizarColaborador(req, res) {
    const indice = Number(req.params.indice)

    const colaborador = buscarPorId(indice)

    if(!colaborador) {
         return res.status(404).json({mensagem: 'Colaborador nao encontrada'});
    }
    const {nome, matricula, setor} = req.body;

    if(nome != undefined) {
        colaborador.nome = nome;
    }

    if(matricula != undefined) {
        colaborador.matricula = matricula;
    }

    if(matricula != undefined) {
        colaborador.matricula = matricula;
    }

    const colaboradorNovo = new Colaborador(nome, matricula, setor);

    atualizar(colaboradorNovo);

    res.status(200).json({mensagem: 'Colaborador atualizado com sucesso'});
}

export function deletarColaborador(req, res){
    const indice = Number(req.params.indice);

    const colaborador = buscarPorId(indice);

    if(!colaborador) {
        return res.status(404).json({mensagem: 'Colaborador nao encontrado'})
    }

    deletar(indice);

    res.status(204);
}