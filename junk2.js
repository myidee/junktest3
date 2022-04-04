// import React from 'react';
// import UserContext from './context/user-context';
// class App extends React.Component {
//   state = {
//     user: {},
//   };
//   loginUser = () => {
//     this.setState({
//       user: {
//         id: 1,
//         first: `Zac`,
//         last: `Gordon`,
//         username: `zgordon`,
//       },
//     });
//   };
//   render() {
//     return (
//       <UserContext.Provider value={this.state.user}>
//         <Header>
//           <button onClick={this.loginUser}>Login</button>
//         </Header>
//         <Content />
//         <Sidebar />
//         <Footer />
//       </UserContext.Provider>
//     );
//   }
// }
// export default App;

// import React from 'react';
// import UserContext from './context/user-context';

// const Header = (props) => (
//   <UserContext.Consumer>
//     {(context) => <span>Welcome {context.first}!</span>}
//   </UserContext.Consumer>
// );
// export default WelcomeMessage;

// import React from 'react';
// import UserContext from './context/user-context';
// class App extends React.Component {
//   state = {
//     user: {},
//   };
//   loginUser = () => {
//     this.setState({
//       user: {
//         id: 1,
//         first: `Zac`,
//         last: `Gordon`,
//         username: `zgordon`,
//       },
//     });
//   };
//   render() {
//     return (
//       <UserContext.Provider
//         value={{
//           user: this.state.user,
//           loginUser: this.loginUser,
//         }}
//       >
//         <Header />
//         <Content />
//         <Sidebar />
//         <Footer />
//       </UserContext.Provider>
//     );
//   }
// }
// export default App;

// import React from 'react';
// import UserContext from '../context/user-context';
// const LoginButton = () => (
//   <UserContext.Consumer>
//     {({ loginUser }) => <button onClick={loginUser}>Login</button>}
//   </UserContext.Consumer>
// );
// export default LoginButton;

// import React from 'react';
// import UserContext from '../context/user-context';

// class LoginButton extends React.Component {
//   static contextType = UserContext;
//   render() {
//     <button onClick={this.context.loginUser}>Login</button>;
//   }
// }
// export default LoginButton;

// import React from 'react';

// const CartContext = React.createContext();
// export default CartContext;

// import React from 'react';
// import UserContext from './context/user-context';
// import CartContext from './context/cart-context';

// class App extends React.Component {
//   state = {
//     user: {},
//     cart: [],
//   };
//   addToCart = (item) => {
//     const itemIndex = this.state.cart.findIndex(
//       (product) => product.id === item.id
//     );
//     if (itemIndex === -1) {
//       this.setState({
//         cart: [...this.state.cart, { id: item.id, quantity: 1 }],
//       });
//     } else {
//       const cart = [...this.state.cart];
//       cart[itemIndex].quantity = cart[itemIndex].quantity + 1;
//       this.setState({ cart });
//     }
//   };
//   loginUser = () => {
//     this.setState({
//       user: {
//         id: 1,
//         first: `Zac`,
//         last: `Gordon`,
//         username: `zgordon`,
//       },
//     });
//   };
//   render() {
//     return (
//       <UserContext.Provider
//         value={{
//           user: this.state.user,
//           loginUser: this.loginUser,
//         }}
//       >
//         <CartContext.Provider
//           value={{ cart: this.state.cart, addToCart: this.addToCart }}
//         >
//           <Header />
//           <Content />
//           <Sidebar />
//           <Footer />
//         </CartContext.Provider>
//       </UserContext.Provider>
//     );
//   }
// }
// export default App;

import React from 'react';
import UserContext from '../context/user-context';
import CartContext from '../context/cart-context';

const MiniCart = () => {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <CartContext.Consumer>
          {({ cart }) =>
            cart.map((item) => {
              const product = getProductInfo(item.id);
              return (
                <>
                  <h4>Cart for {user.name}</h4>
                  <li key={item.id}>
                    {product.name} [{item.quantity}]
                  </li>
                </>
              );
            })
          }
        </CartContext.Consumer>
      )}
      )
    </UserContext.Consumer>
  );
};

export default MiniCart;
