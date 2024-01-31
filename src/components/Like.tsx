import { ReactNode, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface Props {
	// children: ReactNode;
	// color?: 'primary' | 'secondary' | 'danger';
	onClick: () => void;
}

const Like = ({ onClick }: Props) => {
	const [status, setStatus] = useState(false);
	const toggle = () => {
		setStatus(!status);
		onClick();
	};

	if (status) return <AiFillHeart color="#ff6b81" size={50} onClick={toggle} />;
	else return <AiOutlineHeart color="blue" size={50} onClick={toggle} />;
};

export default Like;
