import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	color?: 'primary' | 'secondary' | 'danger';
	onClick: () => void;
}

export const Button = ({ children, onClick, color = 'primary' }: Props) => {
	return (
		<button className={'btn btn-' + color} onClick={onClick}>
			{children}
		</button>
	);
};
