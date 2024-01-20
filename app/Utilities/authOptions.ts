import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/app/Utilities/prisma";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }: any) {
      const foundUser = await prisma.user.findFirst({
        where: { email: user.email },
      });
      if (!foundUser) {
        user.id = undefined;
        await prisma.user.create({ data: { ...user } });
      }
      return true;
    },
    async session({ session }) {
      // if(!session.user) return session

      const foundUser = await prisma.user.findFirst({
        where: { email: session.user.email! },
      });

      if (foundUser) {
        session.user.id = foundUser.id;
      }
      // foundUser ? (session.user.id = foundUser.id) : undefined;

      return session;
    },
  },
};
