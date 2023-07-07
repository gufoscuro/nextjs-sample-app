import React, { PropsWithChildren } from 'react';
import styles from './flexcolumn.module.css';

interface FlexColumnProps {
    grow?: boolean;
    shrink?: boolean;
    scrollable?: boolean;
    className?: string;
}

const FlexColumn = ({ children, grow, shrink, scrollable, className, ...props }: PropsWithChildren<FlexColumnProps>) => {
    let classes = [
        styles.column,
        ...[ className ?? '' ]
    ];

    if (grow)
        classes.push(styles.grow);

    if (shrink)
        classes.push(styles.shrink);
    
    if (scrollable)
        classes.push(styles.scrollable);
    
	return (
        <div className={classes.join(' ')} {...props}>{children}</div>
	);
};

export default FlexColumn;