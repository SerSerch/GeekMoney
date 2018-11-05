import React from 'react';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password_commit: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault();

    if (this.state.password === this.state.password_commit) {

      const formData = new FormData(e.target);

      const data = {
        "user": {}
      };

      for (let value of formData) {
        data["user"][value[0]] = value[1]; 
      }

      fetch("/api/v1/signup", {
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
        });
    } else {
      console.log("Пароли не совпадают");
    }
  }

  handleChange(e) {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
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
        <label>
          Подтвердите пароль:
            <input name="password_commit" type="password" value={this.state.password_commit} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Зарегистрироваться" />
      </form>
    );
  }
}

export default RegisterForm;