import React, { useState } from "react";
import { Row, Col } from "antd";
import {
  Form,
  Input,
  Upload,
  message,
  Button,
  Checkbox,
  Select,
  Tabs,
  Radio,
  DatePicker,
  Switch,
  Modal,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

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

const { Option } = Select;

const FormB = () => {
  const [showModel, setShowModel] = useState(false);

  function onpickerChange(date, dateString) {
    console.log(date, dateString);
  }

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

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        <Col className="grey-artwork-span" sm={4} md={4} lg={4} xl={4}>
            Add Artwork (2/2){" "}
          </Col>
          <Col className="align-right" sm={20} md={20} lg={20} xl={20}>
            <button>Cancel</button>
            <button className="white-btn">Back to Previous Step</button>
            <button className="blue-btn">Submit</button>
          </Col>
        </Row>
      </div>
    <div className="inner-form padding-top30">
        <Form.Item
          label="Artwork Title "
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <span className="span-value">Battle of San Romano</span>
        </Form.Item>
        <Form.Item className="width349"
          name="Group"
          label="Group "
          hasFeedback
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select placeholder="Select Group">
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
         
        </Form.Item>

        <span className="border-group"></span>

        <Form.Item className="width349"
          label="Include Transaction"
          name="Include Transaction"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Switch defaultChecked onChange={onChange} />{" "}
          <span className="span-value padding-left10">Included</span>
        </Form.Item>
        <Form.Item className="width349"
          name="Transaction Type* "
          label="Transaction Type*"
          hasFeedback
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select
            placeholder="Select Transaction Type
"
          >
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>
        <Form.Item className="width349"
          name="Seller* "
          label="Seller* "
          hasFeedback
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select
            placeholder="Select Contact
"
          >
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>
        <Form.Item className="width349"
          name="Buyer


        "
          label="Buyer
        "
          hasFeedback
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select
            placeholder="Select Contact
"
          >
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>
        <Form.Item className="width349"
          label="Transaction Date "
          name="Transaction Date"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <DatePicker onpickerChange={onpickerChange} />
        </Form.Item>
        <Form.Item
          label="Invoice Date"
          name="Invoice Date"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <DatePicker onpickerChange={onpickerChange} />
        </Form.Item>
        <Form.Item
          className="gbp"
          name="Amount "
          label="Amount "
          hasFeedback
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <div>
            <Select
              placeholder="GBP 
"
            >
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
            <Input />
          </div>
        </Form.Item>
        <Form.Item
          label="Tax Amount"
          name="Tax Amount"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input className="width224" />
        </Form.Item>
        <Form.Item className="width349"
          name="Broker "
          label="Broker"
          hasFeedback
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select
            placeholder="Select Contact
"
          >
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>
        <Form.Item
        className="gbp"
        name="Commission Amount"
        label="Commission Amount "
        hasFeedback
        rules={[{ required: true, message: "Please select your country!" }]}
      >
        <div>
          <Select
            placeholder="+ "
          >
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
          <Input />
        </div>
      </Form.Item>
        <Form.Item
        label="Additional Costs Amount"
        name="Additional Costs Amount"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input className="width224" />
      </Form.Item>
        <Form.Item
        className="gbp"
        name="Discount"
        label="Discount "
        hasFeedback
        rules={[{ required: true, message: "Please select your country!" }]}
      >
        <div>
          <Select
            placeholder="%
"
          >
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
          <Input />
        </div>
      </Form.Item>
        <Form.Item
        label="Total "
        name="Total "
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <span className="span-value">GBP 0.00</span>
      </Form.Item>
        <Form.Item
        label="Additional Costs Amount"
        name="Additional Costs Amount"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input className="width224" />
      </Form.Item>
        <Form.Item
        label="Amount USD"
        name="Amount USD"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <span className="span-value">0.00</span>
      </Form.Item>
        <Form.Item
        label="Tax Amount USD "
        name="Tax Amount USD"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <span className="span-value">0.00</span>
      </Form.Item>
        <Form.Item
        label="Commission Amount USD "
        name="Commission Amount USD "
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <span className="span-value">0.00</span>
      </Form.Item>
        <Form.Item
        label="Additional Costs Amount USD"
        name="Additional Costs Amount USD"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <span className="span-value">0.00</span>
      </Form.Item>
        <Form.Item
        label="Discount USD"
        name="Discount USD"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <span className="span-value">0.00</span>
      </Form.Item>
        <Form.Item className="width536"
        label="Notes"
        name="Notes"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input.TextArea />
      </Form.Item>
        <Form.Item
        label="Attachments"
        name="Attachments "
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Upload {...props} className="upload-btn">
          <Button>
            <UploadOutlined />
            Upload
          </Button>
        </Upload>
        <span className="border-group"></span>
      </Form.Item>
        <Form.Item
        label="Payment Instalments "
        name="Payment Instalments  "
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Switch defaultChecked onChange={onChange} />{" "}
        <span className="span-value padding-left10">Included</span>
      </Form.Item>
        <Form.Item className="width349"
        name="Artwork  "
        label="Artwork "
        hasFeedback
        rules={[{ required: true, message: "Please select your country!" }]}
      >
        <Select placeholder="The Battle of San Romano">
          <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option>
        </Select>
      </Form.Item>
      
      </div>
      {/* <div>
        <Button type="primary" onClick={() => setShowModel(true)}>
          Open Modal
        </Button>
        <Modal
          className="modal-added"
          title="Basic Modal"
          visible={showModel}
          onOk={() => setShowModel(false)}
          onCancel={() => setShowModel(false)}
        >
          <p></p>

          <p>Artwork successfully added</p>
        </Modal>
      </div> */}

      <div>
        <Button type="primary" onClick={() => setShowModel(true)}>
          Open Modal
        </Button>
        <Modal
          className="modal-added"
          title="Basic Modal"
          visible={showModel}
          onOk={() => setShowModel(false)}
          onCancel={() => setShowModel(false)}
        >
          <p></p>

          <p>Artwork successfully </p>
        </Modal>
      </div>

    </Form>
  );
};
export default FormB;
