
const Logout = ({ setToken, token }) => {
    setToken(null);
    window.location.href = '/';
}

export default Logout;