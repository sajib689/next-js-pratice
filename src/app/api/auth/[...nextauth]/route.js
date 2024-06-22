import NextAuth from "next-auth/next";
import credentialsProvider from "next-auth/providers/credentials"
export const authOptions = {
    secret: process.env.NEXT_SECRET_KEY,
    session: {
        strategy: 'jwt',
    },
    providers: [
        credentialsProvider({
            credentials: {
                email: {label: 'email', type: 'text', required: true, placeholder: 'Email Address'},
                password: {label: 'password', type: 'password', required: true, placeholder: 'Enter Password'}
            },
            async authorize(credentials) {
                const {email, password} = credentials;
                if(!credentials){
                    return null;
                }
                if(email){
                    const currentUser = users.find(user => user.email === email);
                    console.log(currentUser)
                    if(currentUser){
                        if(currentUser.password === password){
                            return currentUser
                        }
                    }
                    return null;
                }
                return true;
            }
        })
    ]
}
const handler = NextAuth(authOptions)
const users = [
    {
        email: 'sajibbabu@gmail.com',
        password: '123456',
        type: 'admin',
        name: 'sajibbabu',
    }
]
export {handler as GET, handler as POST}