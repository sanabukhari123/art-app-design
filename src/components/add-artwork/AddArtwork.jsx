import React, { useState } from "react";
import "./AddArtwork.css";
import { Row, Col, Form, Steps } from "antd";
import FormA from "./formA/FormA";
import FormB from "./formB/FormB";

const AddArtwork = () => {
  const [step, setStep] = useState(2);
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

  return step === 1 ? <FormA /> : <FormB />;
};

export default AddArtwork;
