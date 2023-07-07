import React, { PropsWithChildren } from 'react';
import styles from './flexlayout.module.css';

interface FlexLayoutProps {
    centerItems?: boolean;
    justifyCenter?: boolean;
    fullHeight?: boolean;
    className?: string;
}

const FlexLayout = ({ children, centerItems, justifyCenter, fullHeight, className, ...props }: PropsWithChildren<FlexLayoutProps>) => {
    let classes = [
        styles.flexLayout, 
        ...[ className ?? '' ]
    ];

    if (centerItems)
        classes.push(styles.centerItems);

    if (justifyCenter)
        classes.push(styles.justifyCenter);

    if (fullHeight)
        classes.push(styles.fullHeight);
    
	return (
        <div data-testid="flex_layout" className={classes.join(' ')} {...props}>{children}</div>
	);
};

export default FlexLayout;