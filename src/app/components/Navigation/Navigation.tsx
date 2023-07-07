import React from 'react';
// import Image from 'next/image';
import Link from 'next/link'
import NavigationLink from '../NavigationLink/NavigationLink';
import { LINKS, LOGO_LINK_URL } from './navigation.config';
import styles from './navigation.module.css';

const Navigation: React.FC = () => {
	return (
		<aside className={styles.sidebar}>
			<header className={styles.logo}>
				<Link href={LOGO_LINK_URL}>
					Demo APP
				</Link>
			</header>
			<nav className={styles.menu}>
				<ul>
					{LINKS.map((link) => (
						<li key={link.url}>
							<NavigationLink {...link} />
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Navigation;
