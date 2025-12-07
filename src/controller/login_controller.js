import { ApiError } from "../util/apiError.js";

class LoginController {
    async login(req, res) {
        try {
            const { email, senha } = req.body;

            console.log(email,senha);
            
            // Validate inputs
            if (!email || !senha) {
                return res.json(new ApiError(400, 'BadRequest', 'Email and password are required'));
            }

           
            return res.status(200).json({
                message: 'Login successful',
                // token: token,
                // user: { id: user.id, email: user.email }
            });
        } catch (error) {
            return res.json(new ApiError(500, 'InternalServerError', 'An error occurred during login'));
        }
    }

    async logout(req, res) {
        try {
            return res.status(200).json({ message: 'Logout successful' });
        } catch (error) {
            return res.json(new ApiError(500, 'InternalServerError', 'An error occurred during logout'));
        }
    }
}

export { LoginController };