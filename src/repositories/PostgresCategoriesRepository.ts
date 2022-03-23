import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Category {
    console.log(name, description);

    return {
      name: 'Corsaa',
      description: 'Sedan cinza',
      created_at: new Date(),
    };
  }

  list(): Category[] {
    return [
      {
        name: 'Corsaa',
        description: 'Sedan cinza',
        created_at: new Date(),
      },
    ];
  }

  findByName(name: string): Category {
    console.log(name);

    return {
      name: 'Corsaa',
      description: 'Sedan cinza',
      created_at: new Date(),
    };
  }
}

export { PostgresCategoriesRepository };
