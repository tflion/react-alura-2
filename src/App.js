import './App.css';
import FormCadastro from './components/FormCadastro/FormCadastro';

const App = () => {
  return (
    <>
      <FormCadastro
        onSubmit={aoEnviarForm}
        validarCPF={validarCPF} />
    </>
  );
}

const aoEnviarForm = (dados) => {
  console.log(dados)
};

const validarCPF = (cpf) => {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

export default App;
