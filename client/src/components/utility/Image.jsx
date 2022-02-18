import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const URI = 'https://allrose-exteriors.herokuapp.com'
const Image = ({ image }) => {
	const [currentImage, setCurrentImage] = useState(0)

	return (
		<>
			{image instanceof Array && (
				<LazyLoadImage
					src={`${URI}/api/images/${image[currentImage]}`}
					onLoad={() => {
						if (currentImage < image.length - 1)
							setCurrentImage(currentImage + 1)
					}}
					style={{
						filter: `blur(${image.length - (currentImage + 1)}px)`,
					}}
				/>
			)}
		</>
	)
}

export default Image
