import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const id = uuidv4();
  const { name, description } = request.body;

  const categorie = {
    id,
    name,
    description,
    created_at: new Date(),
  };

  categories.push(categorie);

  return response.status(201).json(categorie);
});

export { categoriesRoutes };
