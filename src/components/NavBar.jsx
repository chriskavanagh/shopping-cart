import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline
} from "mdbreact";

class NavbarPage extends Component {
  state = {
    isOpen: false,
    searchQuery: "",
    filtered: []
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ searchQuery: value });
  };

  handleSearch = () => {
    const { searchQuery } = this.state;
    let filtered = this.props.items.filter(i =>
      i.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    this.setState({ filtered: filtered });
  };

  render() {
    return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left />
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    value={this.state.searchQuery}
                    onChange={this.handleChange}
                    onKeyDown={this.handleSearch}
                  />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
