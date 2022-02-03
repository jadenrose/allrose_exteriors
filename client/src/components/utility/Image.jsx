import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const URI = 'https://allrose-exteriors.herokuapp.com'

const Image = ({ image }) => (
	<LazyLoadImage
		src={`${URI}/api/images/${image}`}
		alt="product logo"
		effect="opacity"
	/>
)
export default Image
