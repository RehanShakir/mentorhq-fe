import { useState } from "react";
import { message } from "antd";

const useCoverLetter = () => {
  const [answer, setAnswer] = useState("Answer Here");
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    console.log("Success:", values);
    try {
      const coverLetterPrompt = `Can you write me a cover letter for the position of ${values.field} at ${values.companyName}? The job description is: ${values.description}. I have ${values.experience} years of experience working as ${values.field}. All other details related to me 

      other details: ${values.otherDetails}
      
      If there is no other detail don’t consider it    
      `;

      const prompt = [{ role: "user", content: coverLetterPrompt }];
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          temperature: "gpt-3.5-turbo",
          model: "gpt-3.5-turbo",
          system: "You are a writer. You have to write best cover letters",
        }),
      });

      const data = await response.json();
      setAnswer(data.result);

      if (data.result) {
        setLoading(false);
      }

      console.log(data);

      if (response.status !== 200) {
        setLoading(false);
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      return data.result;
    } catch (error: any) {
      setLoading(false);
      console.error(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleCopy = () => {
    message.success("Cover Letter copied!");
  };

  return { answer, loading, onFinish, onFinishFailed, handleCopy };
};

export default useCoverLetter;
