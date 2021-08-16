import './App.css';
import FormCadastro from './components/FormCadastro/FormCadastro';
import { Container, Typography } from '@material-ui/core';

import { validarCPF, validarSenha, validarNome } from './models/cadastro';
import ValidacoesCadastro from './contexts/validacoesCadastro';

const App = () => {
  return (
    <>
      <Container maxWidth="sm" component="article">
        <Typography align="center" variant="h4">Formulário de Cadastro</Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome }}>
          <FormCadastro
            aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    </>
  );
}

const aoEnviarForm = (dados) => {
  console.log(dados)
};



export default App;
