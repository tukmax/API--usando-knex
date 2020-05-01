import { Router } from 'express';

import UsersController from './controllers/UsersController.js'

const routes = Router();

routes
    //Rota de Usuarios
    .post('/users', UsersController.create)
    .get('/users', UsersController.index)
    .get('/users/:id', UsersController.profile)
    .put('/users/:id', UsersController.update)
    .delete('/users/:id', UsersController.delete)

export default routes;