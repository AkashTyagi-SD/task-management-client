import { FC } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { Form, Input, Button, Typography } from "antd";
import { LockOutlined } from "@ant-design/icons";

import { fetchStaticLabelSelector } from "global/global_selector";

const { Title } = Typography;

import classes from "./forgot-password.module.css";
import { ROUTE_SIGNIN } from "global/global-constant";

const ForgotPassword: FC = () => {
  const { labels } = useSelector(fetchStaticLabelSelector);

  const clickHandler = () => {
    //router.push('/register');
  };

  return (
    <Form
      name="normal_login"
      className={classes.login_form}
      initialValues={{ remember: true }}
      onFinish={clickHandler}
      hideRequiredMark={false}
      size="large"
    >
      <Title className={classes.title} level={2}>
        {labels?.forgotPassword?.forgotPasswordTitle}
      </Title>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: `${labels?.forgotPassword?.passwordRequired}`,
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder={labels?.forgotPassword?.createPasswordLabel}
        />
      </Form.Item>
      <Form.Item
        name="confirmpassword"
        rules={[
          {
            required: true,
            message: `${labels?.forgotPassword?.confirmPasswordRequired}`,
          },

          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(labels?.forgotPassword?.confirmPasswordMismatch)
              );
            },
          }),
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="text"
          placeholder={labels?.forgotPassword?.confirmPasswordLabel}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={classes.login_form_button}
        >
          {labels?.forgotPassword?.buttonLabel}
        </Button>
        <div className={classes.signup_text}>
          {labels?.forgotPassword?.alreadyAccountText}
          <Link to={ROUTE_SIGNIN} className={classes.login_form_forgot}>
            {labels?.forgotPassword?.loginSwitchLabel}
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default ForgotPassword;
