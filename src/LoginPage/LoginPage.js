import MenuBar from '../components/MenuBar/MenuBar';
import FormLogin from '../components/FormLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';
import logo from './logo1.png'

function LoginPage() {
    return (
        <div className = 'FormLogin' >
            <img className='logo' src = {logo} ></img>
            <FormLogin />
        </div>
    );
}

export default LoginPage;
