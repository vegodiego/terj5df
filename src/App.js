import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.change1 = this.change1.bind(this)
    this.change2 = this.change2.bind(this)
    this.addInvited = this.addInvited.bind(this)
    this.state = {
      list: [],
      name:"",
      lastname:""
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.addInvited}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" value={this.state.name} onChange={this.change1} className="form-control" name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" value={this.state.lastname} onChange={this.change2} className="form-control" name="last-name" />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((i) =>
                  <tr>
                    <td>{i.name}</td>
                    <td>{i.lastname}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  change1(event){
    this.setState({
      name: event.target.value
    })
  }

  change2(event){
    this.setState({
      lastname: event.target.value
    })
  }

  addInvited(event){
    event.preventDefault();
    this.setState({
      list: this.state.list.concat({name: this.state.name, lastname: this.state.lastname}),
      name: "",
      lastname: ""
    });
  }

}

export default App


