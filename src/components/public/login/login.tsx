import { FC, useEffect,Dispatch } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


import { useSelector,connect } from "react-redux";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import {
  ROUTE_FORGOT_PASSWORD,
  ROUTE_SIGNUP,
  ROUTE_DASHBOARD,
  IS_LOGIN,
  DEFAULT_COKKIES_VALUE,
} from "global/global-constant";

import { fetchStaticLabelSelector } from "global/global_selector";
import {FetchToDo} from './login_action';
import {Props,DispatchToProps,StateToProps,DispatchToDoAction,FetchToDoSate} from './login_model';

const { Title } = Typography;

import classes from "./login.module.css";

const Login: FC<Props> = ({FetchToDo,data,isLoading}) => {
  const [cookies, setCookie, removeCookie] = useCookies([IS_LOGIN]);
  let navigate = useNavigate();
  const {labels } = useSelector(fetchStaticLabelSelector);

  useEffect(() => {
    FetchToDo();
  }, []);

  useEffect(()=>{
console.log('dataaya',data);
console.log('load',isLoading);
  },[data,isLoading]);

  const clickHandler = () => {
    setCookie(IS_LOGIN, true, DEFAULT_COKKIES_VALUE);
    navigate(ROUTE_DASHBOARD, { replace: true });
  };

  return (
    <Form
      name="normal_login"
      className={classes.login_form}
      initialValues={{ remember: false }}
      onFinish={clickHandler}
      hideRequiredMark={true}
      size="large"
    >
      <Title className={classes.title} level={2}>
        {labels?.loginLabel?.loginTitle}
      </Title>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: `${labels?.loginLabel?.emailFormate}`,
          },
          { required: true, message: `${labels?.loginLabel?.emailRequired}` },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder={labels?.loginLabel?.emailPlaceholder}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: `${labels?.loginLabel?.passwordRequired}`,
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder={labels?.loginLabel?.passwordPlaceholder}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>{labels?.loginLabel?.rememberCheckbox}</Checkbox>
        </Form.Item>

        <Link to={ROUTE_FORGOT_PASSWORD} className={classes.login_form_forgot}>
          {labels?.loginLabel?.forgotpasswordText}
        </Link>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={classes.login_form_button}
        >
          {labels?.loginLabel?.buttonLabel}
        </Button>
        <div className={classes.signup_text}>
          Already have account?{" "}
          <Link to={ROUTE_SIGNUP} className={classes.registration_form_forgot}>
            Sign up here!
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps=({data,isLoading}:StateToProps):FetchToDoSate=>{
return{
  data:data,
  isLoading:isLoading,
}
}

const mapDispatchToProps=(dispatch:Dispatch<DispatchToDoAction>):DispatchToProps=>({
  FetchToDo:():void=>dispatch(FetchToDo()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
