import { FC } from "react";
import { Button } from "antd";
import styles from "./styles.module.scss";
import GoogleIcon from "@/assets/Auth/GoogleIcon";
import { ISocialButtonProps } from "./SocialButtonType";

const SocialButton: FC<ISocialButtonProps> = ({ onClick }) => {
  return (
    <div>
      <Button
        className={styles.button}
        icon={<GoogleIcon className={styles.icon} />}
        onClick={onClick}>
        Sign in with Google
      </Button>
    </div>
  );
};

export default SocialButton;
