import React from "react";
import { IntlProvider } from "react-intl";
import { MessageFormatElement } from "react-intl";
import { useRouter } from "next/router";

import es from "@/locales/es";
import en from "@/locales/en";

const messages: Record<string, Record<string, string>> = {
  es,
  en,
};

const Intl: React.FC<React.PropsWithChildren> = ({ children }) => {
  const locale = useRouter().locale as string;
  return (
    <IntlProvider messages={messages[locale] as Record<string, string> | Record<string, MessageFormatElement[]>} locale={locale} defaultLocale="es">
      {children}
    </IntlProvider>
  );
};

export default Intl;
