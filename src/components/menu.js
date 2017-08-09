"use strict"
import React from 'react';
import {Nav, NavItem, Navbar, Badge, Glyphicon} from 'react-bootstrap';

class Menu extends React.Component{
    render(){
      return (
        <Navbar inverse fluid>
           <Navbar.Header>
             <Navbar.Brand>
               <a href="/">Apart(M)rent</a>
             </Navbar.Brand>
             <Navbar.Toggle />
           </Navbar.Header>
            {/* The collapse tag means that in other device the items will be collapsed
            into one dropdown menu */}
           <Navbar.Collapse>
             {/* <Nav pullRight> */}
             <Nav>
               <NavItem eventKey={1} href="/about">About</NavItem>
               <NavItem eventKey={2} href="/contacts">Contacts</NavItem>
               {/* <NavItem eventKey={2} href="/Apartment">יצירת דירה</NavItem> */}
             </Nav>
             {/* <Nav pullRight> */}
             <Nav>
               <NavItem eventKey={1} href="/admin">Admin<span/>
               <Badge className="badge">
               </Badge>
               </NavItem>
             </Nav>
             <Nav pullRight>
               <NavItem eventKey={1} href="/apartmentProfileForm">Create<span />
               <Glyphicon glyph="glyphicon glyphicon-home" style={{marginLeft: '0.5em'}} /><span />
               </NavItem>
             </Nav>
           </Navbar.Collapse>
         </Navbar>
    )
  }
}

export default Menu;
