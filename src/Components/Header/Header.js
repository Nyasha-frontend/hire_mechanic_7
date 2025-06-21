import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "../Header/Header.module.css";
import logo from "../../assets/logo.jpg";
import Header2 from "../Header/Header2";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faCogs,
  faHandshake,
  faEnvelope,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  return (
    <>
      {/* Header with Hamburger Menu */}
      <div className={styles.Header}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <Navbar expand="lg" className="d-lg-none">
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={handleShowMenu}
            className={styles.navbarToggle}
          />
        </Navbar>

        {/* Offcanvas Menu for Mobile */}
        <Offcanvas
          show={showMenu}
          onHide={handleCloseMenu}
          placement="end"
          className={styles.offcanvasMenu}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" onClick={handleCloseMenu}>
                <FontAwesomeIcon icon={faHome} className={styles.icon} /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us" onClick={handleCloseMenu}>
                <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} /> About
              </Nav.Link>
              <Nav.Link onClick={toggleServicesDropdown}>
                <FontAwesomeIcon icon={faCogs} className={styles.icon} /> Services{" "}
                <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
              </Nav.Link>
              {showServicesDropdown && (
                <div className={styles.dropdownMenuMobile}>
                  <Nav.Link as={Link} to="/service-1" onClick={handleCloseMenu}>
                    Service 1
                  </Nav.Link>
                  <Nav.Link as={Link} to="/service-2" onClick={handleCloseMenu}>
                    Service 2
                  </Nav.Link>
                  <Nav.Link as={Link} to="/service-3" onClick={handleCloseMenu}>
                    Service 3
                  </Nav.Link>
                </div>
              )}
              <Nav.Link as={Link} to="#" onClick={handleCloseMenu}>
                <FontAwesomeIcon icon={faHandshake} className={styles.icon} /> Partners
              </Nav.Link>
              <Nav.Link as={Link} to="#" onClick={handleCloseMenu}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Contacts
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Regular Navigation for Desktop */}
        <div className={`d-none d-lg-block ${styles.desktopNav}`}>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} className={styles.icon} /> Home
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} /> About
              </Link>
            </li>
            <li className={styles.dropdown}>
              <Link to="/services">
                <FontAwesomeIcon icon={faCogs} className={styles.icon} /> Services{" "}
                <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
              </Link>
              <div className={styles.dropdownMenu}>
                <Link to="/hire-mechanic">Hire Mechanic</Link>
                <Link to="/get-hired">Get Hired</Link>
                <Link to="/get-franchise">Get Franchise</Link>
                <Link to="/insurance-claim">Insurance Claim</Link>
              </div>
            </li>
            <li>
              <Link to="partners">
                <FontAwesomeIcon icon={faHandshake} className={styles.icon} /> Partners
              </Link>
            </li>
            <li>
              <Link to="contact">
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
      

      <Header2 />
    </>
  );
};

export default Header;