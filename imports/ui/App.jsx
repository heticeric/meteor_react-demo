import React from 'react';

class App extends React.Component
{
  onClick = e =>
  {
    console.log( this.login.value, this.password.value );
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
                ref={ el => this.login = el }
                type="text"
                placeholder="Votre login"
            />
          </div>
          <div>
            <label>Mot de passe </label>
            <input
                ref={ el => this.password = el }
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
