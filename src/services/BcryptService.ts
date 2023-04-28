import bcrypt from 'bcrypt'

export default class BcryptService {
    public async hashPassword(password: string) {
        return await bcrypt.hash(password, 10)
    }

    public async verifyPassword(password: string, hash: string) {
        return await bcrypt.compare(password, hash)
    }
}
