import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request, response) => {
  const id = uuidv4();
  const { name, description } = request.body;

  const category = {
    id,
    name,
    description,
    created_at: new Date(),
  };

  categories.push(category);

  return response.status(201).json(category);
});

export { categoriesRoutes };
