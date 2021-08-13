import { Button, TextField } from "@material-ui/core";

const DadosEntrega = () => {
    return (
        <form>
            <TextField
                id="endereco"
                label="Endereço"
                variant="outlined"
                type="text"
                size="small"
                margin="normal"
                fullWidth
            />
            <TextField
                id="cep"
                label="CEP"
                variant="outlined"
                type="number"
                size="small"
                margin="normal"
            />

            <TextField
                id="numero"
                label="Número"
                variant="outlined"
                type="number"
                size="small"
                margin="normal"
            />
            <TextField
                id="estado"
                label="Estado"
                variant="outlined"
                type="text"
                size="small"
                margin="normal"
            />
            <TextField
                id="cidade"
                label="Cidade"
                variant="outlined"
                type="text"
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