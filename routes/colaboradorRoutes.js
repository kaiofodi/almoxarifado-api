import express from "express";
import { cadastrarColaborador, listarColaborador, BuscarColaboradorPorId, atualizarColaborador, deletarColaborador } from '../controller/colaboradorController.js';

const router = express.Router();

router.post('/', cadastrarColaborador);
router.get('/', listarColaborador);
router.get('/:indice', BuscarColaboradorPorId);
router.patch('/:indice', atualizarColaborador);
router.delete('/:indice', deletarColaborador);

export default router;