import { useEffect, useState } from 'react';
import userService, { User } from '../services/user-service';
import { CanceledError } from '../services/api-client';

const useUsers = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setloading] = useState(false);

	useEffect(() => {
		setloading(true);
		const { request, cancel } = userService.getAll<User>();

		request
			.then((res) => {
				setUsers(res.data);
				setloading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setloading(false);
			});

		return () => cancel();
	}, []);

	return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
