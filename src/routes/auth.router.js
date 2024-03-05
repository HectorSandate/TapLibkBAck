import { Router } from 'express';
import { login, register, deactivateUser, getActiveUsers  } from '../controller/auth.controller.js';
import {registerBar} from '../controller/Bar.Controller.js'
import {ingresarLicor} from '../controller/Licor.Controller.js'
import {ingresarReceta, getActiveRecetas, deactivateReceta} from '../controller/Receta.Controller.js'

const router = Router();


//Login y register rutas 
router.post('/login', login);
router.post('/register', register);

//  ruta para desactivar un usuario
router.put('/users/:userId/deactivate', deactivateUser);

//  ruta para obtener usuarios activos
router.get('/users/active', getActiveUsers);

//Registro de restaurante 
router.post('/registerBar', registerBar);

//ingresar licor
router.post('/ingresarLicor', ingresarLicor);

//  ingresar receta
router.post('/recetas', ingresarReceta);

// obtener recetas activas
router.get('/recetas/active', getActiveRecetas);

// desactivar una receta
router.put('/recetas/:recetaId/deactivate', deactivateReceta);

export default router;