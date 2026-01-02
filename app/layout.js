import './globals.css';
import { Tiro_Devanagari_Marathi } from 'next/font/google';

const tiroDevanagariMarathi = Tiro_Devanagari_Marathi({
  weight: ['400'],
  subsets: ['devanagari'],
  display: 'swap'
});

export const metadata = {
  title: 'मकर संक्रांती शुभेच्छा | Makar Sankranti Greeting',
  description: 'Festive Marathi greeting card celebrating Makar Sankranti with vibrant cultural motifs.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="mr">
      <body className={tiroDevanagariMarathi.className}>{children}</body>
    </html>
  );
}
