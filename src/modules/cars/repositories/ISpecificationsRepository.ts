import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../entities/Specification';

interface ISpecificationsRepository {
  create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification>;
  list(): Promise<Specification[]>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository };
