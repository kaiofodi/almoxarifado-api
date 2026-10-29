const colaboradores = [];

export function cadastrar(colaborador) {
    colaboradores.push(colaborador);
}

export function listar() {
    return colaboradores;
}

export function atualizar(indice, colaborador) {
    colaboradores[indice] = colaborador;
}

export function deletar(indice) {
    colaboradores.splice(indice, 1);
}

export function buscarPorId(indice) {
    return colaboradores[indice];
}