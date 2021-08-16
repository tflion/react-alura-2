import { Button, TextField } from "@material-ui/core";
import { useContext } from "react";
import { useState } from "react";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

const DadosUsuario = ({ aoEnviar }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos] = useErros(validacoes);
    

    const possoEnviar = () => {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false
            }
        }
        return true;
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const senhaHandler = (event) => {
        setSenha(event.target.value);
    }



    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField
                value={email}
                onChange={emailHandler}
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                size="small"
                margin="normal"
                fullWidth
                required
                name="email" />
            <TextField
                value={senha}
                onChange={senhaHandler}
                id="senha"
                label="Senha"
                variant="outlined"
                type="password"
                size="small"
                margin="normal"
                fullWidth
                required
                name="senha"
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto} />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth>Próximo</Button >
        </form>

    );
}

export default DadosUsuario;