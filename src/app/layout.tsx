import './normalize.css'
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/app/components/Navigation/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Demo App',
	description: 'Welcome',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className + ' noscroll'}>
				<div className="MainWrapper">
					<Navigation />
					{children}
				</div>
			</body>
		</html>
	)
}
