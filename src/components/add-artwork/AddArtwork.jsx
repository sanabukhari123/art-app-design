import React, { useState } from "react";
import "./AddArtwork.css";
import { Row, Col } from "antd";
import FromA from "./formA/FromA";
import FormB from "./formB/FormB";

const AddArtwork = () => {
  return (
    <div>
      <div className="grey-row padding-sides">
        <Row>
          <Col className="grey-artwork-span" span={8}>
            Add Artwork (1/2){" "}
          </Col>
          <Col className="align-right" span={8} offset={8}>
            <button>Cancel</button>
            <button>Next</button>
          </Col>
        </Row>
      </div>
         <FormB />
      {/* <FromA /> */}
    
    </div>
  );
};

export default AddArtwork;
