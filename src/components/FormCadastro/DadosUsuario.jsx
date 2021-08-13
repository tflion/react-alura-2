import { Button, TextField } from "@material-ui/core";

const DadosUsuario = () => {
    return (
        <form>
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                size="small"
                margin="normal"
                fullWidth />
            <TextField
                id="senha"
                label="Senha"
                variant="outlined"
                type="password"
                size="small"
                margin="normal"
                fullWidth />
            <Button
                type="submit"
                variant="contained"
                color="primary" fullWidth>Cadastrar</Button >
        </form>

    );
}

export default DadosUsuario;