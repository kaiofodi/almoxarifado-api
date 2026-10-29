import express from "express";
import { cadastrarFerramenta, listarFerramenta, BuscarFerramentaPorId, atualizarFerramenta, deletarFerramenta } from '../controller/ferramentaController.js';

const router = express.Router();

router.post('/', cadastrarFerramenta);
router.get('/', listarFerramenta);
router.get('/:indice', BuscarFerramentaPorId);
router.patch('/:indice', atualizarFerramenta);
router.delete('/:indice', deletarFerramenta);

export default router;