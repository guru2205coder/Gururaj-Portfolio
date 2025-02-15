import { Outfit,Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight:["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight:["400"]
});

export const metadata = {
  title: "Gururaj-Portfolio",
  description: "Welcome to my portfolio! I'm Gururaj Kaki, a passionate software developer specializing in Java, full-stack web development, and data analysis. Explore my projects, skills, and journey in building innovative applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-7 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
