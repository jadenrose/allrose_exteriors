import { useState, useEffect } from 'react'

const useScreen = () => {
	const [clientWidth, setClientWidth] = useState(window.innerWidth)

	useEffect(() => {
		const listener = window.addEventListener('resize', () => {
			setClientWidth(window.innerWidth)
		})

		return () => {
			if (listener) window.removeEventListener(listener)
		}
	}, [])

	return clientWidth
}

export default useScreen
