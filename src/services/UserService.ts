import { User } from "../models/User";
import { db } from "../database/Database";

export class UserService {
  /**
   * Cria um novo usuário e o adiciona ao banco de dados.
   * @param name Nome do usuário.
   * @param email Email do usuário.
   * @param username Nome de usuário (único).
   * @param password Senha do usuário.
   * @returns O usuário criado.
   * @throws Erro se o username já existir ou se os campos forem inválidos.
   */
  createUser(
    name: string,
    email: string,
    username: string,
    password: string
  ): User {
    // Validação de campos obrigatórios
    if (!name.trim() || !email.trim() || !username.trim() || !password.trim()) {
      throw new Error("Todos os campos são obrigatórios.");
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("O email informado é inválido.");
    }

    // Verificar se o username já existe
    if (db.users.some((u) => u.username === username)) {
      throw new Error("O username já existe.");
    }

    // Criar e adicionar o usuário ao banco
    const user = new User(name, email, username, password);
    db.addUser(user);
    return user;
  }

  /**
   * Busca um usuário pelo username.
   * @param username O nome de usuário a ser buscado.
   * @returns O usuário encontrado ou undefined se não existir.
   */
  getUserByUsername(username: string): User | undefined {
    return db.users.find((user) => user.username === username);
  }
}
