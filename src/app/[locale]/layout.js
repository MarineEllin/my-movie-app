import Header from "@/components/Header/Header";
import "./globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { roboto, montserrat } from "@/fonts";
import { availableLocales } from "@/utils/i18n";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

export const metadata = {
  title: "My Movie App",
};

export function generateStaticParams() {
  return availableLocales.map((locale) => ({
    locale,
  }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <AuthProvider>
          <Header locale={locale} />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
