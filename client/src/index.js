import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import Router from './router/Router'

ReactDOM.render(
	<StrictMode>
		<Router />
	</StrictMode>,
	document.getElementById('root')
)
