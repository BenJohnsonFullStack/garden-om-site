import React from "react";
import {
  Body,
  Html,
  Container,
  Tailwind,
  Text,
  Button,
  Img,
  Heading,
  Head,
} from "@react-email/components";

const Email = () => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-[#edece8] my-12 mx-auto font-sans">
          <Text>Hello world</Text>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
