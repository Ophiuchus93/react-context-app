import React from "react";

// This is the initial context
const AccountContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const AccountConsumer = AccountContext.Consumer;

// Use component class to create the provider
class AccountProvider extends React.Component {
  state = {
    username: "ScottyKarate",
    name: "Scott Christensen",
    email: "spiritualanarchy93@gmail.com",
    updateAccount: (account) => this.updateAccount(account),
  };

  updateAccount = ( account ) => {
    this.setState({ ... account, })
  }

  render () {
    return (
        <AccountContext.Provider value={this.state}
        >
        { this.props.children }
        </AccountContext.Provider>
    );
  };
};

export default AccountProvider 