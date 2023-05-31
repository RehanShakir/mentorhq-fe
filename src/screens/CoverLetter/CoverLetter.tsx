import { Button, Input, Form, Card, message, Spin } from "antd";
import { FC, useState } from "react";
import { CopyOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useCoverLetter from "@/hooks/useCoverLetter";

const { TextArea } = Input;

const CoverLetter: FC = () => {
  const { onFinish, onFinishFailed, answer, loading, handleCopy } =
    useCoverLetter();

  return (
    <div className="lg:mr-100">
      {/* Can you write me a cover letter for the position of [role title] at [employer]? This is the job description: XYZ. For context, I [include experience you'd like to highlight]. */}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Company Name"
          name="companyName"
          rules={[
            {
              required: true,
              message:
                "Please enter company name in which you are going to apply!",
            },
          ]}
        >
          <Input
            className="h-12"
            placeholder="Enter company name in which you are going to apply"
          />
        </Form.Item>

        <Form.Item
          label="Your field of job"
          name="field"
          rules={[{ required: true, message: "Please enter your field!" }]}
        >
          <Input
            className="h-12"
            placeholder="Enter your field (eg: HR, Software Engineer etc.)"
          />
        </Form.Item>

        <Form.Item label="Your Experience in Field" name="experience">
          <Input className="h-12" placeholder="Your Experience" />
        </Form.Item>

        <Form.Item label="Job Description" name="description">
          <TextArea
            rows={4}
            className="h-12"
            placeholder="Paste job Description"
          />
        </Form.Item>

        <Form.Item label="Other Details" name="otherDetails">
          <TextArea
            rows={4}
            className="h-12"
            placeholder="Any other details you want to add"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-navyBlue border-none"
          >
            Get Cover Letter
          </Button>
        </Form.Item>
      </Form>
      <Spin spinning={loading}>
        <Card
          type="inner"
          title="Cover Letter"
          extra={
            <CopyToClipboard onCopy={handleCopy} text={answer}>
              <CopyOutlined />
            </CopyToClipboard>
          }
        >
          <div>{answer}</div>
        </Card>
      </Spin>
    </div>
  );
};

export default CoverLetter;
