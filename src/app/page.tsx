import React from "react";
import { CopilotChat } from "@copilotkit/react-ui";
 
function Chat() {
  return (
    <div className="h-lvh w-full flex items-center justify-center">
      <CopilotChat 
        className="w-full max-w-3xl flex flex-col h-full py-6" 
        agent="myAgent"
      />
    </div>
  );
}
 
export default Chat;