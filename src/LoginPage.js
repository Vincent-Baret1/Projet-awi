import MenuBar from './components/MenuBar';
import FormLogin from './components/FormLogin';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
    return (
        <div>
            <MenuBar />
            <FormLogin />
        </div>
    );
}

export default LoginPage;
