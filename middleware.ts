import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const locales = routing.locales;
const defaultLocale = routing.defaultLocale;

// Middleware principal con soporte de idioma desde cookie
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Omitir archivos estáticos y rutas ya localizadas
  const isPublicFile = /\.(.*)$/.test(pathname);
  const hasLocale = locales.some((loc) => pathname.startsWith(`/${loc}`));
  if (isPublicFile || hasLocale) {
    return createMiddleware(routing)(request);
  }

  // Intentar obtener idioma desde cookie
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

  const selectedLocale =
    cookieLocale && locales.includes(cookieLocale)
      ? cookieLocale
      : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${selectedLocale}${pathname}`;
  return NextResponse.redirect(url);
}

// Configuración de rutas que usarán el middleware
export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
