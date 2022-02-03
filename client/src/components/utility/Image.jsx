import { useEffect } from 'react'
import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const URI = 'https://allrose-exteriors.herokuapp.com'

const Image = ({ image }) => {
	const MultiResImage = ({ images }) => {
		const [currentImage, setCurrentImage] = useState(0)

		useEffect(() => console.log(currentImage))

		return (
			<LazyLoadImage
				src={`${URI}/api/images/${images[currentImage]}`}
				onLoad={() => {
					if (currentImage < images.length - 1)
						setCurrentImage(currentImage + 1)
				}}
				style={{ filter: `blur(${3 - currentImage}px)` }}
			/>
		)
	}

	if (image instanceof Array) return <MultiResImage images={image} />

	return <LazyLoadImage src={`${URI}/api/images/${image}`} />
}

export default Image
