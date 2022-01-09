import Flexbox from './Flexbox'

const ProductCard = ({ productLogo }) => (
	<Flexbox className="ProductCard">
		<img
			src={`http://localhost:5000/api/images/${productLogo}`}
			alt="product logo"
		/>
	</Flexbox>
)

export default ProductCard
