"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const locales = ["en", "es"];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  const changeLocale = (newLocale: string) => {
    // Guardar idioma y posición del scroll
    localStorage.setItem("locale", newLocale);
    localStorage.setItem("scrollY", window.scrollY.toString());
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;

    // Cambiar idioma en la URL
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPathname = segments.join("/") || "/";
    router.push(newPathname);
  };

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    const savedScrollY = localStorage.getItem("scrollY");

    // Redirigir si la URL no contiene el idioma guardado
    if (savedLocale && !locales.includes(currentLocale)) {
      router.replace(`/${savedLocale}${pathname}`);
    }

    // Restaurar scroll si hay uno guardado
    if (savedScrollY) {
      window.scrollTo({ top: parseInt(savedScrollY), behavior: "auto" });
      localStorage.removeItem("scrollY");
    }
  }, [pathname]);

  return (
    <nav className="fixed z-50 top-4 right-4 bg-black  backdrop-blur-md  border-gray-200 dark:border-zinc-700 px-2 py-1 shadow-lg transition-all ">
      <div className="flex items-center gap-1">
        {locales.map((locale) => (
          <button
            key={locale}
            onClick={() => changeLocale(locale)}
            disabled={locale === currentLocale}
            className={`px-3 cursor-pointer py-1 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2
              ${
                locale === currentLocale
                  ? "bg-orange-500 dark:text-black"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
              }
              disabled:cursor-not-allowed disabled:opacity-70`}
            title={`Switch to ${locale.toUpperCase()}`}
          >
            {locale.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  );
}
