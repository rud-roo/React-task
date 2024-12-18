import { useGetAllProducts } from "../hooks/server-states/products";
import ProductList from "../components/ProductList";

const AllProducts = () => {
	const { products } = useGetAllProducts();
  
	return (
		<main>
			<div>
				<div className="product-section">
					<div className="product-section__heading">
						<h4>Product list in your app</h4>
					</div>
					<div className="product-table-container">
						<table>
							<ProductList products={products} />
						</table>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AllProducts;