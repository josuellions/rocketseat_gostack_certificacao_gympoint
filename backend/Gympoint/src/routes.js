import { Router } from 'express';

import UserController from './app/controllers/UserController';
import StudentsController from './app/controllers/StudentsController';
import SessionController from './app/controllers/SessionController';

import PlansController from './app/controllers/PlansController';
import RegistrationsController from './app/controllers/RegistrationsController';

import CheckinsController from './app/controllers/CheckinsController';
import HelpOrdersController from './app/controllers/HelpOrdersController';
import AnswerController from './app/controllers/AnswerController';

import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.get('/students/:id/checkins', CheckinsController.index);
routes.post('/students/:id/checkins', CheckinsController.store);

routes.get('/students/:id/help-orders', HelpOrdersController.index);
routes.post('/students/:id/help-orders', HelpOrdersController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/students', StudentsController.index);
routes.get('/students/users', StudentsController.show);
routes.post('/students', StudentsController.store);
routes.put('/students', StudentsController.update);
routes.delete('/students/:id', StudentsController.delete);

routes.get('/plans', PlansController.index);
routes.post('/plans', PlansController.store);
routes.put('/plans', PlansController.update);
routes.delete('/plans/:id', PlansController.delete);

routes.get('/registrations', RegistrationsController.index);
routes.post('/registrations', RegistrationsController.store);
routes.put('/registrations', RegistrationsController.update);
routes.delete('/registrations/:id', RegistrationsController.delete);

routes.get('/help-orders/answer', AnswerController.index);
routes.put('/help-orders/:id/answer', AnswerController.update);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

export default routes;
