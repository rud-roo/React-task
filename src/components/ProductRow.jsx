/* eslint-disable react/prop-types */
import { useRemoveProductsMutation } from "../store/features/apiSlice";
import { useDispatch } from "react-redux";
import { removeProduct } from "../store/reducer/product";

function ProductRow({ item }) {
	const [deleteProduct] = useRemoveProductsMutation();
	const removeHandler = () => {
		deleteProduct(item.id)
	}

	return (
		<tr className="product-row d-flex justify-content-around align-items-center">
			<td>
				<img src={item.image} className="product-img" alt="" />
			</td>

			<td>
				<h2>{item.title}</h2>
			</td>
			<td>
				<h2>{item.price}</h2>
			</td>
			<td onClick={removeHandler}>x</td>
		</tr>
	);
}

export default ProductRow;