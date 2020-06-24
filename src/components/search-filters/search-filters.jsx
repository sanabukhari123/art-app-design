import React from "react";

import {
  Button,
  Row,
  Col,
  Checkbox,
  Input,
  Select,
  DatePicker,
  Slider,
} from "antd";
const { Option } = Select;

const SearchFilter = () => {
  const { RangePicker } = DatePicker;

  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const plainOptions = ["Owned", "Sold", "Split"];
  const options = [
    { label: "Owned", value: "Owned" },
    { label: "Sold", value: "Sold" },
    { label: "Split", value: "Split" },
    { label: "Other", value: "Other", },
  ];
  const optionsWithDisabled = [
    { label: "Owned", value: "Owned" },
    { label: "Sold", value: "Sold" },
    { label: "Split", value: "Split", },
    { label: "Other", value: "Other", },
  ];

  return (
    
    <Col className="filter-section"
      sm={4}
      md={4}
      lg={5}
      xl={5}
      style={{ background: "#f2f2f2", padding: 15, height: '100%' }}
    >
      <Row className="filter-row">
        <Col md={2} lg={6} xl={10}>
          <span>Filters</span>
        </Col>
        <Col md={2} lg={6} xl={14}>
          <Button>Default Button</Button>
        </Col>
      </Row>
      <Row>
      <label className="padding-top0">Groups</label>
        <Select
          defaultValue="All Groups"
          style={{ width: 220 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Row>
      <Row>
      <label>Artists</label>
        <Select
          defaultValue="All Artists

          "
          style={{ width: 220 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Row>
 
      <Row>
      <label>Tags</label>
        <Input placeholder="Start typing tag name" style={{ width: 220 }} />
      </Row>

      <Row>
      <label>Categories</label>
        <Select
          defaultValue="All Categories
           "
          style={{ width: 220 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Row>
      <Row>
      <label>Artwork Dates</label>
        <Select
          defaultValue="DD/MM/YYYY   "
          style={{ width: 220 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Row>
      <Row className="margin-top15">
        <RangePicker />
      </Row>

      <Row>
        <label>Status</label>
      </Row>
      <Row>
        <div>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={["Owned"]}
            onChange={onChange}
          />
        </div>
      </Row>
<Row className="dimension">
    Dimensions
</Row>


        <Row>
            <label className="grey-label">Height (cm)</label>
        <Slider style={{width:'100%'}} range defaultValue={[20, 50]} disabled={false} />
      </Row>
      <Row>
            <label className="grey-label">Width (cm)</label>
        <Slider style={{width:'100%'}} range defaultValue={[20, 50]} disabled={false} />
      </Row>
      <Row>
            <label className="grey-label">Depth (cm)</label>
        <Slider style={{width:'100%'}} range defaultValue={[20, 50]} disabled={false} />
      </Row>
      <Row>
      <label>Location</label>
        <Input placeholder="Start typing location
" style={{ width: 220 }} />
      </Row>
      <Row>
          <label>  Insurance Value (USD)</label>
        <Col span={11}>
          {" "}
          <Input placeholder="Minimum" />
        </Col>
        <Col span={11} offset={2}>
          <Input placeholder="Maximum" />
        </Col>
      </Row>
      <Row className="margin-top15">
        <Slider style={{width:'100%'}} range defaultValue={[20, 50]} disabled={false} />
      </Row>
      <Row>
          <label>Owner</label>
        <Select
          defaultValue="All Artists          "
          style={{ width: 220 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Row>
    </Col>

  );
};

export default SearchFilter;
