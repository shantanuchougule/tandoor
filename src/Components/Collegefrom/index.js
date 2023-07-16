// material-ui
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { Card } from "antd";
import { Upload, Button, Icon, Input, Form } from "antd";
import {
    fromsaveByApi
} from "../Helper/collegefrom";
const { TextArea } = Input;


const Collegefrom = () => {
  const [loading, setLoading] = useState(false);
  const [orderdata, setOrderdata] = useState(null);
  const [form] = Form.useForm();
  let { id } = useParams();
  const navigate = useNavigate();
  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log("Success:", values);
    let payloadData = {
      ...values,
    };
    setLoading(true);
    fromsaveByApi(payloadData)
      .then(
        async (res) => {
          console.log(" success");
          // alert('Success');
          swal("College", "success Fully", "success");
          console.log("res", res);
          // navigate("/")
          setLoading(false);
        },
        (err) => {
          console.log("error");
          setLoading(false);
          swal("College", "invalid ", "error");
        }
      )
      .catch();
  };

  return (
    <>
      <div variant="h5" className="form mx-auto ">
        {/* <small className="textblack-50">Home</small> {"/"} <b>College From</b> */}  
      </div>
      <div item lg={12} sm={24} xs={12}></div>
      <Card className="col-md-8 mx-auto text-center p-4 mb-2">
        <div className="driver-create-card ">
        <h3 class="mb-5">Book Your Table Online</h3>
          <div item lg={12} sm={24} xs={12}>
          <Form
            name="basic"
            initialValues={orderdata}
            onFinish={onFinish}
            autoComplete="off"
            form={form}
          >
            <div item xs={12} container spacing={2}>
              <div item lg={4} sm={6} xs={12}>
                <Form.Item
                  name="name"
                  id="outlined-basic"
                  label=" Name"
                  variant="outlined"
                  type="text"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter your Name!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
              </div>
              <div item lg={3} sm={6} xs={12}>
                <Form.Item
                  name="email"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter your email!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
              </div>
              <div item lg={3} sm={6} xs={12}>
                <Form.Item
                  name="message"
                  id="outlined-basic"
                  variant="outlined"
                  label="People"
                  type="text"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter your People",
                    },
                  ]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
              </div>

              <div item lg={12} sm={12} xs={12} className="edit-button">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn btn-primary m-2 button-hov-add-to-list btn-sm rounded-pill"
                    loading={loading}
                    // disabled={!email || email === ''}
                  >
                     Book ! 
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Collegefrom;