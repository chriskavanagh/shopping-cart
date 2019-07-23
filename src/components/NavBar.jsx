import React, { useState, useEffect } from "react";
import { useStoreActions } from "easy-peasy";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline
} from "mdbreact";

const NavbarPage = ({ items, paginate }) => {
  const { GroceryList } = items;
  const [isOpen, setisOpen] = useState(false);
  const [searchQuery, setsearchQuery] = useState("");
  const [filtered, setfiltered] = useState([]);

  const addFilter = useStoreActions(
    actions => actions.CartModel.addfilteredList
  );

  const toggleCollapse = () => {
    setisOpen(!isOpen);
  };

  const handleChange = e => {
    const { value } = e.target;
    setsearchQuery(value);
  };

  const handleSearch = () => {
    // reset current page to page 1 or won't show search result
    paginate(1);

    // filter items by searchquery
    const filtered = GroceryList.filter(i => {
      return i.name.toLowerCase().startsWith(searchQuery.toLowerCase());
    });

    setfiltered(filtered);
  };

  useEffect(() => {
    addFilter(filtered);
  });

  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Acme Development</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left />
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBFormInline waves>
              <div className="md-form my-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleChange}
                  onKeyUp={handleSearch}
                />
              </div>
            </MDBFormInline>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default NavbarPage;
