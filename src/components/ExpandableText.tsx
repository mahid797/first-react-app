import React, { ReactNode, useState } from 'react';

interface Props {
	children: string;
	maxChars?: number;
	onClick?: () => void;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
	const [isExpanded, setExpansion] = useState(false);

	if (children.length <= maxChars) return <p>{children}</p>;

	const text = isExpanded ? children : children.substring(0, maxChars);

	return (
		<p>
			{text}{' '}
			<button
				style={{
					borderRadius: '5px',
					borderColor: 'transparent',
					backgroundColor: 'wheat',
					color: 'black',
				}}
				onClick={() => setExpansion(!isExpanded)}>
				{isExpanded ? 'less' : '...more'}
			</button>
		</p>
	);
};

export default ExpandableText;
