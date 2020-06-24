import { Button, Col, Row, Select } from "antd";
import React from "react";
import CollectionTable from "../collection-table/collection-table";
import SearchFilter from "../search-filters/search-filters";
import "./Collection.css";
const { Option } = Select;

const Collection = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Row>
      <SearchFilter />
      <Col sm={20} md={20} lg={19} xl={19}>
        <Row className="artwork-outer" gutter={8}>
          <Col style={{lineHeight:' 2.5715'}} span={6}>
            <span style={{ padding: "0 10px" }}>121 artworks</span>
          </Col>
          <Col span={3}>
            <Select
              defaultValue="Show by 10
              "
              style={{ width: "100%" }}
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
          <Col span={3}>
            <Select
              defaultValue="Sort by

              "
              style={{ width: "100%" }}
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
          <Col span={3}>
            <Select defaultValue="Bulk Actions
" style={{ width: "100%" }} disabled>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Button style={{ float: "right", width: "100%" }}>
            Generate Report
            </Button>
          </Col>
          <Col span={4}>
            <Button style={{ float: "right", width: "100%" }}>
            Add Artwork
            </Button>
          </Col>
        </Row>
        <Row>
          <CollectionTable />
        </Row>
      </Col>
    </Row>
  );
};

export default Collection;
