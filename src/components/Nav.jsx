import { Link } from "react-router-dom";

function Nav() {
	return (
		<header className="header">
			<div className="container">
				<nav className="header__navbar">
					<ul>
						<li>
							<Link to="/">Shop</Link>
						</li>
						<li>
							<Link to="/cart">Cart</Link>
						</li>
						<li>
							<Link to="/posts">Post List</Link>
						</li>
						<li>
							<Link to="/users">User List</Link>
						</li>
						<li>
							<Link to="/counter-app">Counter App</Link>
						</li>
						<li>
							<Link to="/add-product">Add Product</Link>
						</li>
						<li>
							<Link to="/all-product">All Products</Link>
						</li>
						<li>
							<Link to="/note-list">Note List</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Nav;