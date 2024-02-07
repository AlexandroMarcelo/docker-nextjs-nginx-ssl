import { useIntl } from "react-intl";

interface TranslateProps {
  t: string;
  toUpperCase?: boolean;
}

/**
 * Get the translated text as a component
 */
const T = ({ t, toUpperCase }: TranslateProps) => {
  const { formatMessage } = useIntl();
  if (toUpperCase) return <>{formatMessage({ id: t }).toUpperCase()}</>;
  return <>{formatMessage({ id: t })}</>;
};

/**
 * Get the translated text as string
 */
const Tx = ({ t, toUpperCase }: TranslateProps) => {
  const { formatMessage } = useIntl();
  if (toUpperCase) return formatMessage({ id: t }).toUpperCase();
  return formatMessage({ id: t });
};

export { T, Tx };
