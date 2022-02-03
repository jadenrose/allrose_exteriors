import Image from './Image'
import Link from './Link'
import Typography from './Typography'

const ProductCard = ({
	content,
	productLogo,
	productUrl,
	className,
	...rest
}) => {
	if (productLogo && productUrl)
		return (
			<Link
				className={`ProductCard${className ? ` ${className}` : ''}`}
				props={{ href: productUrl }}
				{...rest}
			>
				<Image image={productLogo} />
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
