import React from 'react';

import 'fontsource-roboto';
import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';

import { useState } from 'react';
import { useContext } from 'react';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

const DadosPessoais = ({ aoEnviar }) => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    

    const validarNomeHandler = (event) => {

        setNome(event.target.value);
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
        if (possoEnviar()) {
            aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
    }

    return (
        <form>
            <TextField
                value={nome}
                onChange={validarNomeHandler}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome"
                label="Nome"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                name="nome" />
            <TextField
                value={sobrenome}
                onChange={validarSobrenomeHandler}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                name="sobrenome" />
            <TextField
                value={cpf}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onChange={validarCpfHandler}
                onBlur={validarCampos}
                id="cpf"
                label="CPF"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                name="cpf" />
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
            <Button variant="contained" color="primary" fullWidth onClick={enviarFormularioHandler}>Próximo</Button>

        </form >
    );
}

export default DadosPessoais;