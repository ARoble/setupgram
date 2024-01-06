import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/app/Utilities/prisma";
import { log } from "console";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({
      user,
    }: {
      user: {
        id: string | undefined;
        email: string;
        image: string;
        name: string;
      };
    }) {
      const foundUser = await prisma.user.findFirst({
        where: { email: user.email },
      });
      if (!foundUser) {
        user.id = undefined;
        await prisma.user.create({ data: { ...user } });
      }
      return true;
    },
    async session({ session, token, user }) {
      const foundUser = await prisma.user.findFirst({
        where: { email: session.user.email },
      });

      if (foundUser) {
        session.user.id = foundUser.id;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
