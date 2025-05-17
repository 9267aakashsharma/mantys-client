import React, { useEffect } from "react";
import {
  Form,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Button,
  useDisclosure,
} from "@heroui/react";
import AppModal from "./Modal";
import { useNavigate } from "react-router";

export default function App() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [email, setEmail] = React.useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
    navigate("/success");
  };

  useEffect(() => {
    if (email.length == 3) {
      onOpen();
    }
  }, [email, onOpen]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <Button
        size="sm"
        variant="bordered"
        onPress={onOpen}
        className="absolute top-4 right-4"
      >
        Open Modal Manually
      </Button>
      <div className="border p-8 rounded-lg shadow-md border-default-700">
        <Form
          className="w-full justify-center items-center space-y-4"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-4 max-w-md">
            <Input
              isRequired
              errorMessage={({ validationDetails }) => {
                if (validationDetails.valueMissing) {
                  return "Please enter your name";
                }
              }}
              label="Name"
              classNames={{
                input: "name",
              }}
              id="name"
              labelPlacement="outside"
              name="name"
              placeholder="Enter your name"
            />

            <Input
              isRequired
              errorMessage={({ validationDetails }) => {
                if (validationDetails.valueMissing) {
                  return "Please enter your email";
                }
                if (validationDetails.typeMismatch) {
                  return "Please enter a valid email address";
                }
              }}
              label="Email"
              id="email"
              classNames={{
                input: "email",
              }}
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Select
              label="Country"
              labelPlacement="outside"
              name="country"
              placeholder="Select country"
            >
              <SelectItem key="ar">Argentina</SelectItem>
              <SelectItem key="us">United States</SelectItem>
              <SelectItem key="ca">Canada</SelectItem>
              <SelectItem key="uk">United Kingdom</SelectItem>
              <SelectItem key="au">Australia</SelectItem>
            </Select>

            <Checkbox
              classNames={{
                label: "text-small agreement-checkbox",
              }}
              name="terms"
              validationBehavior="aria"
              value="true"
            >
              I agree to the terms and conditions
            </Checkbox>

            <div className="flex gap-4">
              <Button
                id="submit-btn"
                className="w-full submit-btn"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
      <AppModal
        title="Form Modal"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}
