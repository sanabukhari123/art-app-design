import React, { useState } from "react";
import moment from "moment";
import { Row, Col, InputNumber, DatePicker } from "antd";
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



const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const { Option } = Select;

const FormA = () => {

  const { Option } = Select;

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }
  
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const DEFAULT_DATE_FORMATE = "dayMonthYear";
  const DEFAULT_DATE_TYPE = "exactDate";
  const [dateFormate, setDateFormate] = useState(DEFAULT_DATE_FORMATE);
  const [dateType, setDateType] = useState(DEFAULT_DATE_TYPE);

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

  const dateTypeRadioBtnStyle = {
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
            label="Artwork Title"
            name="artworkTitle"
            rules={[{ required: true, message: "This is required" }]}
          >
            <Input placeholder="The Battle of San Romano" />
          </Form.Item>
          <Form.Item
            className="small-width"
            name="artist"
            label="Artist"
            rules={[{ required: true, message: "Please select Artist" }]}
          >
            <Select placeholder="Select Category">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item className="id-name small-width" label="ID*">
            <Input.Group>
              <Form.Item
                name={["authoAssignId", "autoAssigned"]}
                noStyle
                valuePropName="checked"
              >
                <Checkbox> Auto-assign ID </Checkbox>
              </Form.Item>
              <br />
              <Form.Item
                name={["authoAssignId", "autoAssignedDetails"]}
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item
            className="small-width"
            name="category"
            label="Category"
            rules={[{ required: true, message: "Please select your country!" }]}
          >
            <Select placeholder="Select Category">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item
            className="small-width"
            name="medium"
            label="Medium"
            rules={[{ required: true, message: "Please select your country!" }]}
          >
            <Select placeholder="Select Medium">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item
            className="small-width tag-select"
            label="Tags"
            name="tags"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Please select"
    defaultValue={['Italy', 'Middle Ages']}
    onChange={handleChange}
  >
    {children}
  </Select>
          </Form.Item>
          <Form.Item name="dateType">
            <Input.Group>
              <div className="button-tab">
                <Radio.Group
                  value={dateFormate}
                  onChange={(e) => setDateFormate(e.target.value)}
                  style={{ marginBottom: 16 }}
                >
                  <Radio.Button value="dayMonthYear">DD/MM/YYYY</Radio.Button>
                  <Radio.Button value="monthYear">MM/YYYY</Radio.Button>
                  <Radio.Button value="year">YYYY</Radio.Button>
                  <Radio.Button value="centruy">C</Radio.Button>
                  <Checkbox className="circa">Circa</Checkbox>
                </Radio.Group>

                <div>
                  <Radio.Group
                    onChange={(e) => setDateType(e.target.value)}
                    value={dateType}
                  >
                    <Radio style={dateTypeRadioBtnStyle} value="exactDate">
                      Exact Date
                    </Radio>
                    <Radio style={dateTypeRadioBtnStyle} value="dateRange">
                      Date Range
                    </Radio>
                  </Radio.Group>
                </div>

                <div>
                  {/* <RangePicker
                    defaultValue={[
                      moment("2015/01/01", dateFormat),
                      moment("2015/01/01", dateFormat),
                    ]}
                    format={dateFormat}
                  /> */}
                </div>
                <div>
                  <div className="select-outer">
                    <Form.Item noStyle>
                      <Select placeholder="XIII">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="select-outer">
                    <Form.Item noStyle>
                      <Select placeholder="XIV">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                      </Select>
                    </Form.Item>
                  </div>
                </div>
              </div>
            </Input.Group>
          </Form.Item>
          <Form.Item
            className="dimension-class"
            label="Dimensions"
            name="dimensions"
          >
            <Input.Group>
              <Form.Item
                label="Height (cm):"
                name={["dimensions", "height"]}
                rules={[{ required: true }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                label="Width (cm):"
                name={["dimensions", "width"]}
                rules={[{ required: true }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                label="Depth (cm):"
                name={["dimensions", "depth"]}
                rules={[{ required: true }]}
              >
                <InputNumber />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </div>
        <Form.Item
          className="small-width"
          label="Annotation to Dimensions"
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
          className="format-acceptance"
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
