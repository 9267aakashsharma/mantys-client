import { useEffect } from "react";
import { Alert, Button, useDisclosure } from "@heroui/react";
import AppModal from "./Modal";

function Success() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onOpen();
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onOpen]);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center relative">
      <Button
        size="sm"
        variant="bordered"
        onPress={onOpen}
        className="absolute top-4 right-4"
      >
        Open Modal Manually
      </Button>
      <div>
        <Alert
          description="You've submitted the form successfully"
          title="Success"
          className="border border-default-700"
        />
      </div>
      <AppModal
        title="Success Modal"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}

export default Success;
