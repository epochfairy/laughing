import { rest } from 'msw'

interface LoginBody {
	username: string
}
interface LoginResponse {
	username: string
	firstName: string
}

const login = [
	// Handles a POST /login request
	rest.post<LoginBody, LoginResponse>('/login', (req, res, ctx) => {
		const { username } = req.body
		return res(
			ctx.json({
				username,
				firstName: 'John',
			})
		)
	}),
	// Handles a GET /user request
]

export default login
