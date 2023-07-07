'use client'

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import styles from './navigationlink.module.css';

interface NavigationLinkProps {
    label: string;
    url: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ label, url }) => {
	const pathname = usePathname();
	const [ active, setActive ] = useState(false)
	
	useEffect(() => setActive(pathname ? pathname.includes(url) : false), [ pathname ]);

	return (
		<Link href={url} className={styles.navlink + ' ' + (active ? styles.active : '')}>{label}</Link>
	);
};

export default NavigationLink;