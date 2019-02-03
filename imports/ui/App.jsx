import React from 'react';

class App extends React.Component
{
  state =
  {
    login : ""
    ,password : ""
  }

  onClick = e =>
  {
    console.log( this.state.login, this.state.password );
  }

  render()
  {
    return (
      <div>
        <h1>Marvellous</h1>
        <section>
          <div>
            <label>Login </label>
            <input
                name="login"
                onChange={ e => this.setState( { login : e.target.value } ) }
                type="text"
                placeholder="Votre login"
            />
          </div>
          <div>
            <label>Mot de passe </label>
            <input
                name="password"
                onChange={ e => this.setState( { password : e.target.value } ) }
                type="text"
                placeholder="Votre mot de passe"
            />
          </div>
          <button onClick={ this.onClick }>S'authentifier</button>
        </section>
      </div>
    );
  }
}

export default App;
