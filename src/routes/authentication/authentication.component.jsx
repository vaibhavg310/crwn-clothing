import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {
    // check if user is signed in then redirect to home page
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentUser);
    if (currentUser) {
        navigate("/")
    }

    return (
        <div className='authentication-container'>
              <SignInForm />
              <SignUpForm />
        </div>         
    )
};

export default Authentication;