import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Star from "./star";
import styled from 'styled-components';

const Beer = ({ data, onClick, onStarClick, isStarActive }) => {
  const { name, tagline, image_url } = data;
  if (data)
    return (
      <Card
        style={{
          cursor: "pointer",
          maxWidth: "16rem",
          maxHeight: "22rem",
          boxShadow: "rgba(0, 0, 0, 0.05) 2px 2px 2px 2px",
        }}
        className="text-center mx-auto h-100"
      >
        <Card.Header>
          <Star onStarClick={onStarClick} isStarActive={isStarActive} />
        </Card.Header>
        <Card.Body onClick={onClick}>
          <Image
            style={{ maxHeight: "10rem", maxWidth: "8rem" }}
            src={image_url}
            className="img-fluid"
          />
          <Card.Title>{name}</Card.Title>
          <Card.Text>{tagline}</Card.Text>
        </Card.Body>
      </Card>
    );
  return <></>;
};

export default Beer;
