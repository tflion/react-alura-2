import { Typography, Stepper, StepLabel, Step } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

const FormCadastro = ({ aoEnviar}) => {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});

    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetados);
        }
    })


    const coletarDados = (dados) => {
        setDadosColetados({ ...dadosColetados, ...dados });
        proximo();
    }

    const proximo = () => {
        setEtapaAtual(etapaAtual + 1);
    }

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Cadastro Finalizado!</Typography>
    ];




    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}

        </>
    );
}

export default FormCadastro;