import SessionValidator from "App/Validators/SessionValidator"

export default class SessionsController {
    async store({ auth, request, response }) {
        const { email, password } = await request.validate(SessionValidator)
        try {
            const token = await auth.use('api').attempt(email, password)
            return token
        } catch {
            return response.badRequest('Invalid credentials')
        }
    }
}
