import { Specification } from '../model/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private spefications: Specification[];

  constructor() {
    this.spefications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.spefications.push(specification);

    return specification;
  }

  list(): Specification[] {
    return this.spefications;
  }

  findByName(name: string): Specification | undefined {
    const specification = this.spefications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}

export { SpecificationsRepository };
