import React from 'react';
import Link from 'next/link';
import { useTranslation } from "next-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="bg-gray-100 mt-10 py-6 text-center text-gray-600 text-sm">
      <div className="max-w-4xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} crypto-online-casino.com. {t("footerCopyright")}</p>
        <p className="mt-2">
          {t("footerDisclaimer")} <Link href="/disclaimer" className="underline hover:text-blue-700">{t("disclaimer")}</Link>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
