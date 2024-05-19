import React, { useState } from "react";
import { Form, Input, Modal, Select, message } from "antd";
import axios from "axios";
import Layout from "../components/Layouts/Layout.js";
import Spinner from "../components/Spinner.js";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // form handling
  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      // console.log(user);
      setLoading(true);
      // const id = user.user._id;
      // console.log(id);
      await axios.post("/transactions/add-transaction", {
        ...values,
        userid: user.user._id,
      });
      // transactions
      setLoading(false);
      message.success("transaction added successfully");
      setShowModal(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error("Failed to add Transaction");
    }
  };
  return (
    <Layout>
      {loading && <Spinner />}
      <div className="filters">
        <div>range filter </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Add New
          </button>
        </div>
      </div>
      <Modal
        title="Add Transaction"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}
      >
        <Form Layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Type" name="type">
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="business">Business</Select.Option>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="entertainment">Entertainment</Select.Option>
              <Select.Option value="medical">Medical</Select.Option>
              <Select.Option value="tax">Tax</Select.Option>
              <Select.Option value="side-income">Side Income</Select.Option>
              <Select.Option value="bills">Bills</Select.Option>
              <Select.Option value="miscellaneous">Miscellaneous</Select.Option>
              <Select.Option value="others">Others</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              {" "}
              SAVE
            </button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export default HomePage;
