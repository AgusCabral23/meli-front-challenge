import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meli Front Challenge",
  description: "Generated by AgusCabral",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex h-16 bg-yellow-300">
          <form
            action="/items"
            className="m-auto items-center flex max-w-screen-lg flex-1 px-4"
          >
            <a href="/">
              <img
                src="../assets/Logo_ML.png"
                alt="Logo MercadoLibre"
                className="h-8 px-2 py-1"
              />
            </a>
            <input className="h-8 flex-1 px-4" name="search" type="text" />
            <button
              className="h-8 bg-gray-200 px-2 py-1 text-slate-700"
              type="submit"
            >
              <img src="../assets/ic_Search.png" alt="Buscar" />
            </button>
          </form>
        </header>
        <main className="max-w-screen-lg m-auto p-4">{children}</main>
      </body>
    </html>
  );
}
