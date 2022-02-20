import { useState } from 'react'

const URI = 'https://allrose-exteriors.herokuapp.com'
const Image = ({ image }) => {
	const [currentImage, setCurrentImage] = useState(0)

	return (
		<>
			{image instanceof Array && image[currentImage] && (
				<img
					src={`${URI}/api/images/${image[currentImage]}`}
					alt=""
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
