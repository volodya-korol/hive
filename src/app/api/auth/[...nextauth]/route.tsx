import NextAuth, { User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const currentUser = await prisma.user.findUnique({
          where: { email: credentials.email, password: credentials.password },
        });

        if (currentUser) {
          const { password, ...userWithoutPassAndId } = currentUser;
          return userWithoutPassAndId;
        }
        return null;
      },
    }),
  ],
  pages: { signIn: "/auth/signin" },
});

export { handler as GET, handler as POST };
