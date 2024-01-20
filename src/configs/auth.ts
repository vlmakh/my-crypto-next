import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import { Adapter } from "next-auth/adapters";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
      clientEmail: process.env.NEXT_PUBLIC_FB_CLIENT_EMAIL,
      privateKey: process.env.NEXT_PUBLIC_FB_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    }),
  }) as Adapter,
  pages: {
    signIn: "/signin",
  },
};
