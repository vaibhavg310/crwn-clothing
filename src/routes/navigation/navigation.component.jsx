import {Fragment} from 'react';
import { Outlet, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
//import { UserContext } from '../../contexts/user.context';
//import { CartContext } from '../../contexts/cart.context';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';


import {signOutUser} from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {NavigationContainer, NavLink, LogoContainer, NavLinks} from './navigation.styles';

const Navigation = () => {
  //const {currentUser} = useContext(UserContext); 
  // const {isCartOpen} = useContext(CartContext); 

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  // const signOutHandler = async() => {    
  //    await signOutUser();
  //    setCurrentUser(null);
    
  // };
    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
              <CrwnLogo className='logo' />
            </LogoContainer>
          
          <NavLinks>
            <NavLink className='nav-link' to='/shop'>
              Shop 
            </NavLink>
            {currentUser ?(
              <NavLink as='span' onClick={signOutUser}>
                Sign Out
              </NavLink>
            ):(
              <NavLink to='/auth'>
                Sign In
              </NavLink>
            )}
              <CartIcon />    
          </NavLinks>
          { isCartOpen &&  <CartDropdown />}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }
 export default Navigation;  