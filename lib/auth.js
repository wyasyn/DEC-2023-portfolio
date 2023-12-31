import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import { compare } from "bcrypt";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    // Make sure providers is an array
    providers: [
        // Use CredentialsProvider as a function
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
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
};
