import { AppError } from '@errors/AppError';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '000123',
      email: 'camilla@test.com',
      password: '123456',
      name: 'User test',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate a non-existent user', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'camilla@test.com',
        password: '123456',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with an invalid password', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '000123',
        email: 'camilla@test.com',
        name: 'User test',
        password: '123456',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: 'camilla@test.com',
        password: 'incorrectPassword',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with a non-existent email', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '000123',
        email: 'camilla@test.com',
        name: 'User test',
        password: '123456',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: 'incorrectEmail@test.com',
        password: '123456',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
