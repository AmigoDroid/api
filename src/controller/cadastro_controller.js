class CadastroController {
    async cadastrar(req, res) {
        try {
            const { nome,cpf,endereco,gps, email, senha } = req.body;

            console.log(req.body);
            
            // Validate inputs
            if (!nome || !cpf || !endereco || !gps || !email || !senha) {
                return res.json(new ApiError(400, 'BadRequest', 'All fields are required'));
            }

           
            return res.status(200).json({
                message: 'Cadastro successful',
                // token: token,
                // user: { id: user.id, email: user.email }
            });
        } catch (error) {
            return res.json(new ApiError(500, 'InternalServerError', 'An error occurred during cadastro'));
        }
    }
}

export { CadastroController };