const Footer = ({ path }) => {
    if (path === '/login') {
        return (
            <div className="auth-form-footer-text" >
                New to Jumpstarter? <Link to='/signup'> Signup!</Link>
            </div>
        )
    } else {
        return (
            <div className="auth-form-footer-text" >
                Have An Account? <Link to='/login'>Log in</Link>
            </div>
        )
    }
}

export default Footer