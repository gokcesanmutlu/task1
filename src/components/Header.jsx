import { SlBasket } from "react-icons/sl";
import Basket from "./Basket";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext, useRef, useState } from "react";
import { BasketContext } from './../context/basketContext';
import { ProductContext } from "../context/productContext";
import { Badge } from 'primereact/badge';

function OffcanvasExample() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { basket, setBasket } = useContext(BasketContext);
  const { query, setQuery } = useContext(ProductContext)

  const handleChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
    console.log(query)
  }

  return (
    <>
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid className="px-5">
            <Navbar.Brand className="flex gap-2" href="#">
              <img
                style={{ width: "35px", marginRight: "5px" }}
                src="logoo.jpg"
                alt=""
              />
              SupremeShop
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Form className="d-flex " style={{ marginRight: "150px" }}>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      onChange={handleChange}
                    />
                    <Button variant="outline-success" type="submit">Search</Button>
                  </Form>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/">About</Nav.Link>
                  <NavDropdown
                    title="Campaigns!"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Campaigns1
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Campaigns2
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Campaigns3
                    </NavDropdown.Item>
                  </NavDropdown>
                  <button onClick={() => setIsCartOpen(!isCartOpen)} className="ml-2 flex  justify-center items-center gap-2 position-relative"><SlBasket />
                    <span class="badge position-absolute top-1 start-100 translate-middle rounded-pill bg-danger">{basket.length}</span></button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      {/* Colorful line -under the nav- */}
      <div className="d-flex">
        <div
          style={{ height: "3px", width: "35vw", backgroundColor: "#F01D7C" }}
        ></div>
        <div
          style={{ height: "3px", width: "25vw", backgroundColor: "green" }}
        ></div>
        <div
          style={{ height: "3px", width: "20vw", backgroundColor: "blue" }}
        ></div>
        <div
          style={{ height: "3px", width: "15vw", backgroundColor: "purple" }}
        ></div>
        <div
          style={{ height: "3px", width: "15vw", backgroundColor: "#3b2388" }}
        ></div>
      </div>

      {isCartOpen && <Basket setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />}
    </>
  );
}

export default OffcanvasExample;
