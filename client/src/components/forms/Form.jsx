const Form = ({ children }) => (
	<form onSubmit={(e) => e.preventDefault()} className="Form">
		{children}
	</form>
)

export default Form
