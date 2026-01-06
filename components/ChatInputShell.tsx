import React from "react";
import { ChatInputDemo } from "./ChatInput";

const ChatInputShell = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background">
      <ChatInputDemo />
    </div>
  );
};

export default ChatInputShell;
