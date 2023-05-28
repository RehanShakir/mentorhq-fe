import { ChangeEventHandler, FC, useState } from "react";
import styles from "./styles.module.scss";
import { SocialButton } from "@/features/Auth/components/SocialButton";
import { Divider, Input, Button } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const Auth: FC = () => {
  const handleGoogleLogin = () => {};
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    console.log(value);
    setEmail(value);
  };

  const onClickContinue = () => {
    router.push("/login/email");
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHeading}>
        <h1>Sign in</h1>
        <p>Please enter your email address to sign in.</p>
        <div className={styles.marginTop}>
          <SocialButton onClick={handleGoogleLogin} />
        </div>
        <Divider className={styles.divider}>OR</Divider>
        <div>
          <Input
            className={styles.input}
            placeholder='name@email.com'
            onChange={handleChangeEmail}
          />
          <Button
            className={styles.button}
            type='primary'
            onClick={onClickContinue}
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

export default Auth;
