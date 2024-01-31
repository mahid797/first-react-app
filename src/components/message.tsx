import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	// color?: 'primary' | 'secondary' | 'danger';
	// onClick: () => void;
}

function Message({ children }: Props) {
	// const name = 'Mahid';
	return <span>{children}</span>;
}

export default Message;
