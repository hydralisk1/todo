import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'none',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'none'
    })
  ],
  pages: {
    signIn: '/auth/signin'
  }
}

export default NextAuth(authOptions)
