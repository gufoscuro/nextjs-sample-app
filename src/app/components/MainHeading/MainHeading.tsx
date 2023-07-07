import React, { PropsWithChildren } from 'react';
import styles from './mainheading.module.css';

const MainHeading = ({ children, ...props }: PropsWithChildren) => {
	return (
		<h1 className={styles.mainheading} {...props}>{children}</h1>
	);
};

export default MainHeading;