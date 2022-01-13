import Link from './Link'
import Typography from './Typography'

const ProductCard = ({
	content,
	productLogo,
	productUrl,
	className,
	...rest
}) => {
	const URI = 'https://allrose-exteriors.herokuapp.com'

	if (productLogo && productUrl)
		return (
			<Link
				className={`ProductCard${className ? ` ${className}` : ''}`}
				props={{ href: productUrl }}
				{...rest}
			>
				<img
					src={`${URI}/api/images/${productLogo}`}
					alt="product logo"
				/>
			</Link>
		)

	return (
		<Link
			className={`ProductCard${className ? ` ${className}` : ''}`}
			{...rest}
		>
			<Typography>{content}</Typography>
		</Link>
	)
}

export default ProductCard
