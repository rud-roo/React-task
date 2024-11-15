import { useState } from "react";
import { useCreateProductMutation } from "../store/features/products/productApi";


const AddProduct = () => {
	const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  })

	const [addProduct] = useCreateProductMutation()

  const handleChange = (e) => {
    console.log(e.target.value);
    setProduct({...product, [e.target.name]: e.target.value});
  }

  const submitHandler = (e) => {
    e.preventDefault();
    addProduct(product)
  }

	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
        onSubmit={submitHandler}
			>
				<p>Title</p>
				<input
					type="text"
					name="title"
					required
					style={{ display: "block", width: "70%" }}
          onChange={handleChange}
				/>
				<br />
				<p>Description</p>
				<input
					type="text"
					name="description"
					required
					style={{ display: "block", width: "70%" }}
          onChange={handleChange}
				/>
				<br />
				<p>Price</p>
				<input
					type="number"
					name="price"
					required
					style={{ display: "block", width: "70%" }}
          onChange={handleChange}
				/>
				<br />
				<p>Image</p>
				<input
					type="text"
					name="image"
					required
					style={{ display: "block", width: "70%" }}
          onChange={handleChange}
				/>
				<input type="submit" />
			</form>
		</>
	);
};

export default AddProduct;