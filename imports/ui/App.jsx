import React from 'react';

import Input from "./Input";

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
          <Input 
            label="Login"
            name="login"
            onChange={ this.onChange }
            placeholder="Votre login"
            />
          <Input 
            label="Mot de passe"
            name="password"
            onChange={ this.onChange }
            placeholder="Votre mot de passe"
          />
          <button onClick={ this.onClick }>S'authentifier</button>
        </section>
      </div>
    );
  }
}

export default App;
