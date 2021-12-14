import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchPages } from '../store/pagesSlice'

const usePages = async () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const dispatch = useDispatch()

	useEffect(() => {
		try {
			dispatch(fetchPages())
		} catch (err) {
			setError(err)
		} finally {
			setLoading(false)
		}
	}, [dispatch])

	return {
		loading,
		error,
	}
}

export default usePages
