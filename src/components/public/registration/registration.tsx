import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const { Title } = Typography;

import { fetchStaticLabelSelector } from "global/global_selector";
import classes from "./registration.module.css";
import { ROUTE_SIGNIN } from "global/global-constant";

const Registration: FC = () => {
  const { labels } = useSelector(fetchStaticLabelSelector);

  const clickHandler = () => {
    //router.push('/login');
  };

  return (
    <Form
      name="normal_registration"
      className={classes.registration_form}
      initialValues={{ remember: true }}
      onFinish={clickHandler}
      hideRequiredMark={true}
      size="large"
    >
      <Title className={classes.title} level={2}>
        {labels?.userRegistration?.registrationTitle}
      </Title>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: `${labels?.userRegistration?.nameRequired}`,
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder={labels?.userRegistration?.nameLabel}
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: `${labels?.userRegistration?.emailRequired}`,
          },
          {
            type: "email",
            message: `${labels?.userRegistration?.emailFormate}`,
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder={labels?.userRegistration?.emailPlaceholder}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: `${labels?.userRegistration?.passwordRequired}`,
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder={labels?.userRegistration?.createPasswordLabel}
        />
      </Form.Item>
      <Form.Item
        name="confirmpassword"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: `${labels?.userRegistration?.confirmPasswordRequired}`,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(labels?.userRegistration?.confirmPasswordMismatch)
              );
            },
          }),
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="text"
          placeholder={labels?.userRegistration?.confirmPasswordLabel}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={classes.registration_form_button}
        >
          {labels?.userRegistration?.buttonLabel}
        </Button>
        <div className={classes.signin_text}>
          {labels?.userRegistration?.alreadyAccountText}
          <Link to={ROUTE_SIGNIN} className={classes.registration_form_forgot}>
            {labels?.userRegistration?.loginSwitchLabel}
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Registration;
