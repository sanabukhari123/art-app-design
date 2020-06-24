import React from "react";
import { Col, Row, Table, Card } from "antd";

const { Meta } = Card;

const CollectionTable = () => {
  const tableColumns = [
    {
      title: "Name (all screens)",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <Card className="card-outer"
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
            <div style={{margin:'0 0 10px 0 '}}>
         <p>sana</p>
         <p>sana</p>
         <p>sana</p>
         </div>
         <div>
         <p>sana</p>
         <p>sana</p>
         </div>
        </Card>
      ),
    },
    {
      title: "Age (medium screen or bigger)",
      dataIndex: "age",
      key: "age",
      responsive: ["md"],
      render: (text) => (
        <div>
   
          <div className="margin-bottom10">
         <p>GROUP</p>
         <p>rabeca</p>
          </div>
          <div className="margin-bottom10">
         <p>GROUP</p>
         <p>rabeca</p>
          </div>
          <div className="margin-bottom10">
         <p>GROUP</p>
         <p>rabeca</p>
          </div>
        </div>
      ),
    },
    {
      title: "Address (large screen or bigger)",
      dataIndex: "address",
      key: "address",
      responsive: ["lg"],
      render: (text) => (
        <div>
   
          <div className="margin-bottom10">
         <p>GROUP</p>
         <p>rabeca</p>
         <p>rabeca</p>
          </div>
          <div className="margin-bottom10">
              <Row>
         <p>GROUPname</p>
         <p style={{padding:'0 0 0 25px'}}>rabeca</p>
         </Row>
              <Row>
         <p>64029</p>
         <p style={{padding:'0 0 0 25px'}}>100000</p>
         </Row>
          </div>
        </div>
      ),

    },
  ];
  const tableData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
  ];

  return (
    <Col style={{ width: "100%" }}>
      <Table className="table-collection"
        style={{ width: "100%" }}
        columns={tableColumns}
        dataSource={tableData}
      />
    </Col>
  );
};

export default CollectionTable;
