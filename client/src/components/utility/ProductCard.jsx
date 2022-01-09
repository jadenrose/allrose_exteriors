import Link from './Link'

const ProductCard = ({ productLogo, productUrl }) => {
	const URI =
		process.env.NODE_ENV === 'development'
			? 'http://localhost:5000'
			: 'https://allrose-exteriors.herokuapp.com'

	return (
		<Link className="ProductCard" href={productUrl}>
			<img src={`${URI}/api/images/${productLogo}`} alt="product logo" />
		</Link>
	)
}

export default ProductCard
