import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import { compare } from "bcrypt";
export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/sign-in",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Username",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                const existingUser = await prisma.user.findUnique({
                    where: { username: credentials?.username },
                });
                if (!existingUser) {
                    return null;
                }
                const passwordMatch = await compare(
                    credentials.password,
                    existingUser.password
                );
                if (!passwordMatch) {
                    return null;
                }
                return {
                    id: existingUser.id,
                    username: existingUser.username,
                    email: existingUser.email,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    username: user.username,
                };
            }
            return token;
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username,
                },
            };
        },
    },
};
