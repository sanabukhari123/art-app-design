import React, { useState } from "react";
import { Row, Col } from "antd";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  Upload,
  Tabs,
  Radio,
  Modal,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const FormA = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const [size, setSize] = useState("small");
  const [radio, setRadio] = useState(1);
  const { TabPane } = Tabs;

  const onChange = (e) => {
    setSize(e.target.value);
  };

  const onRadioChange = (e) => {
    console.log("radio checked", e.target.value);
    setRadio(e.target.value);
  };
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  return (
    <Form
      className="artwork1-form"
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className="grey-row padding-sides">
        <Row>
          <Col className="grey-artwork-span" span={8}>
            Add Artwork (1/2){" "}
          </Col>
          <Col className="align-right" span={8} offset={8}>
            <button>Cancel</button>
            <button className="blue-btn">Next</button>
          </Col>
        </Row>
      </div>
      <div className="formA-inner">
        <div className="inner-form">
          <Form.Item
            className="small-width"
            label="Artwork Title* "
            name="Artwork Title"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="The Battle of San Romano" />
          </Form.Item>

          <Form.Item
            className="small-width"
            name="Artist "
            label="Artist "
            hasFeedback
            rules={[{ required: true, message: "Please select your country!" }]}
          >
            <Select placeholder="Select Contact">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item
            className="id-name small-width"
            label="ID*"
            name="ID*"
            valuePropName="checked"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Checkbox>Auto-assign ID</Checkbox>
            <div>
              <Input />
            </div>
          </Form.Item>
          <Form.Item
            className="small-width"
            name="Category"
            label="Category "
            hasFeedback
            rules={[{ required: true, message: "Please select your country!" }]}
          >
            <Select placeholder="Select Category">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item
            className="small-width"
            name="Medium  "
            label="Medium"
            hasFeedback
            rules={[{ required: true, message: "Please select your country!" }]}
          >
            <Select placeholder="Select Medium">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item
            className="small-width"
            label="Tags "
            name="Tags"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Start typing tag name" />
          </Form.Item>
          <Form.Item>
            <div className="button-tab">
              <Radio.Group
                value={size}
                onChange={onChange}
                style={{ marginBottom: 16 }}
              >
                <Radio.Button value="small">DD/MM/YYYY</Radio.Button>
                <Radio.Button value="default">MM/YYYY</Radio.Button>
                <Radio.Button value="large">YYYY</Radio.Button>
                <Radio.Button value="large">C</Radio.Button>
                <Checkbox className="circa">Circa</Checkbox>
              </Radio.Group>
              {/* <Tabs defaultActiveKey="1" size={size} style={{ marginBottom: 32 }}>
              <TabPane tab="Tab 1" key="1">
                Content of tab 1
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of tab 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of tab 3
              </TabPane>
            </Tabs> */}
              {/* <Tabs defaultActiveKey="1" type="card" size={size}>
              <TabPane tab="Card Tab 1" key="1">
                Content of card tab 1
              </TabPane>
              <TabPane tab="Card Tab 2" key="2">
                Content of card tab 2
              </TabPane>
              <TabPane tab="Card Tab 3" key="3">
                Content of card tab 3
              </TabPane>
            </Tabs> */}

              <div>
                <Radio.Group onChange={onRadioChange} value={radio}>
                  <Radio style={radioStyle} value={1}>
                    Exact Date
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    Date Range
                  </Radio>
                </Radio.Group>
              </div>

              <div className="select-outer">
                <Select placeholder="XIII">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </Select>
              </div>
              <div className="select-outer">
                <Select placeholder="XIV">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </Select>
              </div>
            </div>
          </Form.Item>
          <Form.Item
            className="dimension-class"
            label="Dimensions"
            name="Dimensions "
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Row>
              <Row>
                <label>Height (cm):</label>
                <input></input>
              </Row>
              <Row>
                <label>Width (cm):</label>
                <input></input>
              </Row>
              <Row>
                <label>Depth (cm):</label>
                <input></input>
              </Row>
            </Row>
          </Form.Item>
        </div>
        <Form.Item
          className="small-width"
          label="Annotation to Dimensions 

            "
          name="Annotation to Dimensions 

            "
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="textarea"
          label="Description 

            "
          name="Description 

            "
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          className="textarea"
          label="Inscription 

            "
          name="Inscription  

            "
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          className="textarea"
          label="Edition  

            "
          name="Edition  

            "
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          className="textarea"
          label="Provenance 
            "
          name="Provenance   

            "
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          className="textarea"
          label="Framing Details 

 
            "
          name="Framing Details 

   

            "
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          className="textarea"
          label="Packing Details 

 
            "
          name="Packing Details 

   

            "
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          className="small-width"
          label="Packing Crate Ref
 
            "
          name="Packing Crate Ref
            "
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="small-width"
          name="Category
        "
          label="Category

        "
          hasFeedback
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select placeholder="Select Category">
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Image Upload"
          name="Image Upload"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Upload {...props}>
            <Button>
              <UploadOutlined />
              Upload image(s)
            </Button>
          </Upload>
          <span className="message-format">
            Accepted formats: .jpg, .png, .bitmap, .tiff
          </span>
        </Form.Item>
      </div>
    </Form>
  );
};

export default FormA;
