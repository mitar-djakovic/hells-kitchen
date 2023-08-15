import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from '../config';

import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
