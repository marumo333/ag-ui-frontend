import { HttpAgent } from "@ag-ui/client";
import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { NextRequest } from "next/server";
 
// HTTP Agent は HTTP 経由でリモートのエージェントと通信するためのクライアント
const myAgent = new HttpAgent({
  url: "http://localhost:8080/awp", // AG-UI サーバーのエンドポイント
});
 
const runtime = new CopilotRuntime({
  agents: {
    myAgent, // エージェントを登録
  },
});
 
/**
 * POST リクエストを処理するエンドポイント
 */
export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime, 
    serviceAdapter: new ExperimentalEmptyAdapter(),
    endpoint: "/api/copilotkit",
  });
 
  return handleRequest(req);
};
