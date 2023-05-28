import { ChangeEventHandler, FC, useState } from "react";
import styles from "./styles.module.scss";
import { Input, Button } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

const LoginEmail: FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    console.log(value);
    setEmail(value);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHeading}>
        <h1>Sign in with Email</h1>
        <p>Please enter your email address to sign in.</p>
        <div className={styles.marginTop}>USER-EMAIL</div>
        <div>
          <Input
            className={styles.input}
            placeholder='name@email.com'
            onChange={handleChangeEmail}
          />
          <Input
            className={styles.input}
            placeholder='Password'
            onChange={handleChangeEmail}
            type='password'
          />
          <Button
            className={styles.button}
            type='primary'
            icon={<span>&nbsp;</span>}
            disabled={email.length <= 0}>
            Continue
            <RightCircleOutlined className={styles.icon} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginEmail;
