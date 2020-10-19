import React, { useContext } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import { StyledImg } from './styledComponents';
import { toast } from "react-toastify";
import MyExpandCollapse from './MyExpandCollapse.jsx';
import { ShopingItemsContext } from '../../contexts/shopingitemscontext'
const MyModal = ({ show, handleClose, data }) => {
  const { handleShopItems } = useContext(ShopingItemsContext);
  const { image_url, name, tagline, description, abv, srm, id } = data;

  const onShopingBasketButtonClick = () => {
    handleShopItems(id) ?
      toast.error(`در سبد خرید وجود دارد:${data.name}`) :
      toast.success(`به سبد خرید اصافه شد:${data.name}`);
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <StyledImg src={image_url} fluid className="ml-3" />
              <Col md={8} style={{ textAlign: "right" }} >
                <h5>{name}</h5>
                <h6 className="text-muted">{tagline}</h6>
                <p><MyExpandCollapse text={description} /></p>
                <span className="font-weight-bold ml-4">{abv}درصد تلخ</span>
                <span className="font-weight-bold">{srm}دلار</span>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" size="sm" className="float-left" onClick={onShopingBasketButtonClick}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                     سبد خرید
                </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;

