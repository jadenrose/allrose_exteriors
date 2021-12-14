import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store/store'
import Router from './router/Router'

ReactDOM.render(
	<Provider store={store}>
		<StrictMode>
			<Router />
		</StrictMode>
	</Provider>,
	document.getElementById('root')
)
