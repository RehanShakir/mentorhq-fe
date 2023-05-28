import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { theme } from "@/theme";
import { Providers } from "@/redux/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
      </ConfigProvider>
    </Providers>
  );
}
