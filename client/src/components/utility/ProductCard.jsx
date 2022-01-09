import Link from './Link'

const ProductCard = ({ productLogo, productUrl }) => {
	const BACKEND_URI = process.env.BACKEND_URI || 'http://localhost:5000'

	return (
		<Link className="ProductCard" href={productUrl}>
			<img
				src={`${BACKEND_URI}/api/images/${productLogo}`}
				alt="product logo"
			/>
		</Link>
	)
}

export default ProductCard
