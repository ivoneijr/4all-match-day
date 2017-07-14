import React, { Component } from 'react';
import './header.less';
// import { browserHistory } from 'react-router';
// import Helper from '../../Helper';

export default class Header extends Component {
//   constructor(props) {
//     super(props);

//     this.goToOrders = this.goToOrders.bind(this);
//     this.goToRegulamento = this.goToRegulamento.bind(this);
//   }
//   handleSetActive(to) {
//   }
//   goToOrders() {
//     browserHistory.push('/pedidos');
//   }
//   goToRegulamento() {
//     browserHistory.push('/regulamento');
//   }
  render() {
    // let webview = false;
    // let sessionToken = Helper.getUrlParameterByName("token");
    // if(sessionToken) {
    //   webview = true
    // }
    return (
    <div className="intro">
      introtextt
      {/* <div className="introScreen">
        <a className="logos" href="/">
          <img className="logo" src={require("../../../img/logo_grande.png")} alt="alt_logo"/>
          <img className="logo-barao" src={require("../../../img/barao-logo.png")} alt="alt_logo_barao"/>
        </a>
      </div>
      <div className="headerbar">
        <div className="container">
          <a className="menu-item" href="/">Lista de Ofertas</a>
        </div>
      </div> */}
    </div>
    //   <div className="intro">
    //     <div className="introScreen">
    //       <a className="logos" href="/">
    //         <img className="logo" src={require("../../img/logo_grande.png")} />
    //         <img className="logo-barao" src={require("../../img/barao-logo.png")} />
    //       </a>
    //     </div>
    //     <div className="headerbar">
    //       <div className="container">
    //         <a className="menu-item" href="/">Lista de Ofertas</a>
    //         <a className="menu-item" onClick={this.goToRegulamento}>Como Funciona?</a>
    //         {!webview &&
    //           <a className="menu-item" onClick={this.goToOrders}>Meus Pedidos</a>
    //         }
    //       </div>
    //     </div>
    //   </div>
    );
  }
}
