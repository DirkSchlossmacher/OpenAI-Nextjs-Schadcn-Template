import { createAndRunThread, listMessages, checkRunStatus, submitToolOutputs, listRunSteps, retrieveRunStep } from '../services/api';

export const runAssistantCreateAndRunThread = async (assistantId: string, inputMessage: string) => {
  return await createAndRunThread(assistantId, inputMessage);
};

export const runAssistantListMessages = async (threadId: string) => {
  return await listMessages(threadId);
};

export const runAssistantCheckRunStatus = async (threadId: string, runId: string) => {
  return await checkRunStatus(threadId, runId);
};

export const runAssistantSubmitToolOutputs = async (threadId: string, runId: string, toolOutputs: Array<{ toolCallId: string; output: string; }>) => {
  return await submitToolOutputs(threadId, runId, toolOutputs);
};

export const runAssistantListRunSteps = async (threadId: string, runId: string) => {
  return await listRunSteps(threadId, runId);
};

export const runAssistantRetrieveRunStep = async (threadId: string, runId: string, stepId: string) => {
  return await retrieveRunStep(threadId, runId, stepId);
};
