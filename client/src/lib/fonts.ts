import {
  Geist,
  Geist_Mono,
  Momo_Signature,
  Playwrite_NZ,
  Outfit,
} from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const momoSignature = Momo_Signature({
  weight: "400",
  variable: "--font-momo-signature",
  subsets: ["latin"],
});

export const playwriteNZ = Playwrite_NZ({
  weight: "400",
  variable: "--font-playwrite-NZ",
});

export const outfit = Outfit({
  weight: "400",
  variable: "--font-outfit",
});
