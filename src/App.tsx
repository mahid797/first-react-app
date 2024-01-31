import { useEffect, useState } from 'react';
import Alert from './components/Alert';
import { Button } from './components/Button';
import { BsAmazon } from 'react-icons/bs';
import Likes from './components/Likes';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Message from './components/message';
import ExpandableText from './components/ExpandableText';
import Form from './components/Form';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import categories from './expense-tracker/categories';
import userService, { User } from './services/user-service';
import useUsers from './hooks/userUsers';

function App() {
	const { users, error, isLoading, setUsers, setError } = useUsers();

	const addUser = () => {
		const originalUsers = [...users];
		const newUser = { id: 0, name: 'Mahid' };
		setUsers([...users, newUser]);

		userService
			.create(newUser)
			.then(({ data: savedUser }) => {
				setUsers([savedUser, ...users]);
			})
			.catch((err) => {
				setError(err.message);
				setUsers(originalUsers);
			});
	};

	const deleteUser = (user: User) => {
		const originalUsers = [...users];
		setUsers(users.filter((u) => u.id !== user.id));
		userService.delete(user.id).catch((err) => {
			setError(err.message);
			setUsers(originalUsers);
		});
	};

	const updateUser = (user: User) => {
		const originalUsers = [...users];
		const updatedUser = { ...user, name: user.name + '!' };
		setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
		userService.create(updatedUser).catch((err) => {
			setError(err.message);
			setUsers(originalUsers);
		});
	};

	return (
		<>
			{error && <p className="text-danger">{error}</p>}
			{isLoading && <div className="spinner-border"></div>}
			<button className="btn btn-primary mb-3" onClick={() => addUser()}>
				Add User
			</button>
			<ul className="list-group">
				{users.map((user) => (
					<li
						key={user.id}
						className="list-group-item d-flex justify-content-between">
						{user.name}
						<div>
							<button
								className="btn btn-outline-secondary mx-1"
								onClick={() => updateUser(user)}>
								Update
							</button>
							<button
								className="btn btn-outline-danger mx-1"
								onClick={() => deleteUser(user)}>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;

// function App() {
// 	let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
// 	const handleSelectItem = (item: string) => {
// 		console.log(item);
// 	};
// 	return (
// 		<div>
// 			<ListGroup
// 				items={items}
// 				heading="Cities"
// 				onSelectItem={handleSelectItem}
// 			/>
// 		</div>
// 	);
// }

// function App() {
// 	const [alertVsible, setAlertVisibility] = useState(false);
// 	return (
// 		<div style={{margin: '50px'}}>

// 			{alertVsible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
// 			<Button onClick={() => setAlertVisibility(true)}>Click Me! <BsAmazon /></Button>
// 			<br></br>
// 			<br></br>
// 			<Like onClick={() => console.log("Clicked!")}></Like>
// 		</div>
// 	);
// }
// function App() {
// 	const [cartItems, setCartItems] = useState(['Product 1', 'Product 2']);
// 	return (
// 		<div style={{margin: '50px'}}>
// 			<NavBar cartItemsCount={cartItems.length}></NavBar>
// 			<Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
// 		</div>
// 	);
// }

// function App() {
// 	const [game,setGame] = useState({
// 		id: 1,
// 		player: {
// 			name:"John"
// 		}
// 	});

// 	const handleClick = () => {
// 		setGame({...game, player: {...game.player, name: "Mahid"}})
// 	}
// 	return (
// 		<div style={{margin: '50px'}}>
// 			<Message>{game.player.name}</Message>
// 			<Button color="danger" onClick={handleClick}>Change Name!</Button>
// 		</div>
// 	);
// }

// function App() {
// 	const [pizza,setPizza] = useState({
// 		name: 'Spicy Tikka',
// 		toppings: ['Onion']
// 	});

// 	const handleClick = () => {
// 		setPizza({...pizza, toppings: [...pizza.toppings, ' Cheese ']})
// 	}
// 	return (
// 		<div style={{margin: '50px'}}>
// 			<Message>Pizza Name: {pizza.name}</Message>
// 			<Message>Pizza Toppings: {pizza.toppings}</Message>
// 			<Button color="danger" onClick={handleClick}>Add Cheese!</Button>
// 		</div>
// 	);
// }

// function App() {
// 	const [cart,setCart] = useState({
// 		discount: .1,
// 		items: [
// 			{id:1, title: 'Cheese', quantity: 1},
// 			{id:2, title: 'Coke', quantity: 1},
// 		]
// 	});
// 	var count = 0;
// 	const handleClick1 = () => {
// 		setCart({...cart, items: cart.items.map( item => item.id === 1 ? {...item, quantity:item.quantity++} : item)})
// 	}
// 	const handleClick2 = () => {
// 		setCart({...cart, items: cart.items.map( item => item.id === 2 ? {...item, quantity:item.quantity++} : item)});
// 	}

// 	return (

// 		<div style={{margin: '50px'}}>
//  			<Cart cartItems={[cart.items[0].title, cart.items[1].title]} ></Cart>
// 			<br></br>
// 			<Button color="danger" onClick={handleClick1}>Add Cheese to cart</Button>
// 			<br></br>
// 			<br></br>
// 			<Button color="danger" onClick={handleClick2}>Add Coke to cart</Button>
// 		</div>

// 	);

// }

// function App() {
// 		const [text,setText] = useState({

// 		});

// 		const handleClick = () => {
// 			setText({})
// 		}
// 		return (
// 			<div style={{ margin: "10px" }}>
// 				<ExpandableText maxChars={50}>
// 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odit
// 					facilis adipisci ullam inventore mollitia totam, nesciunt vero alias
// 					sapiente, perspiciatis ut. Quod cupiditate inventore voluptatem enim?
// 					Maiores laborum esse placeat, saepe magnam dignissimos, fugiat soluta
// 					ex rerum ad est deserunt consequatur et commodi, tempora molestiae
// 					provident quisquam similique iste repellendus minima? Eum possimus
// 					voluptatum quos quaerat quasi dolores incidunt sint a, perspiciatis
// 					omnis quam quis esse, exercitationem consequatur vero unde totam
// 					perferendis? Velit, saepe eaque. Consequatur laboriosam odio nulla
// 					commodi incidunt voluptas, eos suscipit. Repellat aspernatur beatae
// 					architecto culpa vel placeat, at alias error in atque repudiandae,
// 					pariatur mollitia!
// 				</ExpandableText>
// 			</div>
// 		);
// 	}

// function App() {
// 	const [selectedCategory, setSelectedCategory] = useState('');
// 	const [expenses, setExpenses] = useState([
// 		{ id: 1, description: 'aa', amount: 10, category: 'Utilities' },
// 		{ id: 2, description: 'bb', amount: 10, category: 'Utilities' },
// 		{ id: 3, description: 'cc', amount: 10, category: 'Utilities' },
// 	]);
// 	// const handleClick = () => {
// 	// 	setText({});
// 	// };
// 	const visibleExpenses = selectedCategory
// 		? expenses.filter((e) => e.category == selectedCategory)
// 		: expenses;
// 	return (
// 		<div>
// 			<div className="mb-5">
// 				<ExpenseForm
// 					onSubmit={(expense) =>
// 						setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
// 					}
// 				></ExpenseForm>
// 			</div>
// 			<div className="mb-3">
// 				<ExpenseFilter
// 					onSelectCategory={(category) => setSelectedCategory(category)}
// 				></ExpenseFilter>
// 			</div>
// 			<ExpenseList
// 				expenses={visibleExpenses}
// 				onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
// 			></ExpenseList>
// 		</div>
// 	);
// }
// function App() {
// 	const [users, setUsers] = useState<User[]>([]);

// 	const [error, setError] = useState('');

// 	useEffect(() => {
// 		const fetchUsers = async () => {
// 			try {
// 				const res = await axios.get<User[]>(
// 					'https://jsonplaceholder.typicode.com/users'
// 				);
// 				setUsers(res.data);
// 				// .then((res) => setUsers(res.data))
// 				// .catch((err) => setError(err.message));
// 			} catch (err) {
// 				setError((err as AxiosError).message);
// 			}
// 		};

// 		fetchUsers();
// 	}, []);

// 	return (
// 		<>
// 			{error && <p className="text-danger">{error}</p>}
// 			<ul className="list-group">
// 				{users.map((user) => (
// 					<li key={user.id} className="list-group-item">
// 						{user.name}
// 					</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }
