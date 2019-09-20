import React from "react";
import { Form, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/AccountProvider";

class AccountForm extends React.Component {
  state = {
    username: this.props.username,
    name: this.props.name,
    email: this.props.email
  };
  handleChange = (e, { name, value, }) => {
    this.setState({ [name]: value, });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.updateAccount(this.state)
  }

  render () {
    const { username, email, name, } = this.state;
    return (
      <Form>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Input 
          label="Update email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Input 
          label="Change your name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
      <Form.Button color="blue">Submit</Form.Button>
      </Form>
    )
  }
}

const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      { value => (
        <AccountForm 
          { ...props }
          username={value.username}
          name={value.name}
          email={value.email}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  )
}
 
export default ConnectedAccountForm;