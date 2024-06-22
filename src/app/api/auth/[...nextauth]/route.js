import NextAuth from "next-auth/next";
import credentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
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
})
const users = [
    {
        email: 'sajibbabu@gmail.com',
        password: '123456'
    }
]
export {handler as GET, handler as POST}