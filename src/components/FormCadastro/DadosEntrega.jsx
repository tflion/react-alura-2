import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

const DadosEntrega = ({ aoEnviar }) => {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');

    const enderecoHandler = (event) => {
        setEndereco(event.target.value);
    }
    const cepHandler = (event) => {
        setCep(event.target.value);
    }
    const numeroHandler = (event) => {
        setNumero(event.target.value);
    }
    const cidadeHandler = (event) => {
        setCidade(event.target.value);
    }

    const estadoHandler = (event) => {
        setEstado(event.target.value);
    }

    return (
        <form onSubmit={
            (event) => {
                event.preventDefault();
                aoEnviar({ cep, endereco, numero, cidade, estado });
            }
        }>
            <TextField
                value={endereco}
                onChange={enderecoHandler}
                id="endereco"
                label="Endereço"
                variant="outlined"
                type="text"
                size="small"
                margin="normal"
                fullWidth
            />
            <TextField
                value={cep}
                onChange={cepHandler}
                id="cep"
                label="CEP"
                variant="outlined"
                type="number"
                size="small"
                margin="normal"
            />

            <TextField
                value={numero}
                onChange={numeroHandler}
                id="numero"
                label="Número"
                type="number"
                variant="outlined"
                size="small"
                margin="normal"
            />
            <TextField
                value={estado}
                onChange={estadoHandler}
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                size="small"
                margin="normal"
            />
            <TextField
                value={cidade}
                onChange={cidadeHandler}
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                size="small"
                margin="normal"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth>Finalizar Cadastro</Button >
        </form>

    );
}

export default DadosEntrega;