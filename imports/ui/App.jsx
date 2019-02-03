import React from 'react';

class App extends React.Component
{
  state =
  {
    login : ""
    ,password : ""
  }

  /**
   * Handle the change event of each of the inputs
   * 
   * @param e Event object
   */
  onChange = e =>
  {
    // Use ES6 computed property
    this.setState
    (
      {
        [ e.target.name ]: e.target.value
      }
    );
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
                onChange={ this.onChange }
                type="text"
                placeholder="Votre login"
            />
          </div>
          <div>
            <label>Mot de passe </label>
            <input
                name="password"
                onChange={ this.onChange }
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
