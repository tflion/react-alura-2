import React from 'react';

import 'fontsource-roboto';
import { Button, Container, FormControlLabel, Switch, TextField, Typography } from '@material-ui/core';

import { useState } from 'react';

const FormCadastro = () => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const validarNomeHandler = (event) => {
        let tmpNome = event.target.value;
        if (tmpNome.length >= 3) {
            tmpNome = tmpNome.substr(0, 3);
        }
        setNome(tmpNome);
    }

    const validarSobrenomeHandler = (event) => {
        setSobrenome(event.target.value)
    }

    const validarCpfHandler = (event) => {
        setCpf(event.target.value)
    }
    const validarPromocoesHandler = (event) => {
        setPromocoes(event.target.checked)
    }
    const validarNovidadesHandler = (event) => {
        setNovidades(event.target.checked)
    }

    const enviarFormularioHandler = (event) => {
        event.preventDefault();
        console.log({nome, sobrenome, cpf, promocoes, novidades});
    }

    return (
        <form>
            <Container maxWidth="xs" component="article">
                <Typography align="center" variant="h4">Formulário de Cadastro</Typography>
                <TextField
                    value={nome}
                    onChange={validarNomeHandler}
                    id="nome"
                    label="Nome"
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="normal" />
                <TextField
                    value={sobrenome}
                    onChange={validarSobrenomeHandler}
                    id="sobrenome"
                    label="Sobrenome"
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="normal" />
                <TextField
                    value={cpf}
                    onChange={validarCpfHandler}
                    id="cpf"
                    label="CPF"
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="normal" />
                <FormControlLabel
                    label="Promoções"
                    control={<Switch
                        checked={promocoes}
                        onChange={validarPromocoesHandler}
                        name="promocoes"
                        color="primary"
                    />}
                />
                <FormControlLabel
                    label="Novidades"
                    control={<Switch
                        checked={novidades}
                        onChange={validarNovidadesHandler}
                        name="novidades"
                        color="primary"
                    />}
                />
                <Button variant="contained" color="primary" fullWidth onClick={enviarFormularioHandler}>Cadastrar</Button>
            </Container>
        </form >
    );
}

export default FormCadastro;