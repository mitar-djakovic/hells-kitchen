import React from 'react';
import type { AppProps } from 'next/app';
// eslint-disable-next-line import/no-unresolved
import { Roboto } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

import { theme } from '../config';

import '../styles/global.css';

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={roboto.className}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</main>
	);
}
