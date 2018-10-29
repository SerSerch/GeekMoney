import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      "user": {}
    };

    for (let value of formData) {
      data["user"][value[0]] = value[1]; 
    }

    fetch("/api/v1/signin", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(response => { 
        response.json();
        console.log(response);
        if (response.status === 200) {
          this.props.login();
        }
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Пароль:
            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Войти" />
        {/* <button onClick={this.props.loginHandle} /> */}
      </form>
    );
  }
}

export default LoginForm;