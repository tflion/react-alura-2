import { Container } from '@material-ui/core';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

const FormCadastro = ({ aoEnviar, validarCPF }) => {

    return (
        <>
            <Container maxWidth="xs" component="article">
                <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
                <DadosUsuario />
                <DadosEntrega />
            </Container>
        </>
    );
}

export default FormCadastro;