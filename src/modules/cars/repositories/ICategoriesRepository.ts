import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../entities/Category';

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<Category>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}

export { ICategoriesRepository };
