import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "MovieApp",
      credentials: {
        email: { label: "E-mail", type: "text", placeholder: "Votre e-mail" },
        password: {
          label: "Mot de passe",
          type: "password",
          placeholder: "Votre mot de passe",
        },
      },
      async authorize(credentials, request) {
        console.log(process.env.NEXTAUTH_URL, { credentials });
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await response.json();

        return user || null;
      },
    }),
  ],

  pages: {
    signIn: "/signIn",
  },
});

export { handler as GET, handler as POST };
