import React, { Component } from "react";

import Main from "../templates/Main";

const headeProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir",
};

export default class UserCrud extends Component {
  render() {
    return <main {...headeProps}>Cadastro de Usuário</main>;
  }
}
