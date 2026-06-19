export function availableChatModels(): Array<string> {
  return ["gpt-4.1", "gpt-4.1-mini", "gpt-4o", "gpt-4o-mini", "gpt-5.4-mini", "gpt-5.4-nano", "gpt-5.5", "deepseek-v4-flash", "deepseek-v4-pro"]
}

export function availableCompletionModels(): Array<string> {
  return []
}

export function availableReasoningModels(): Array<string> {
  return ["o1-mini", "gpt-5.5", "gpt-5.4-mini", "deepseek-v4-flash", "deepseek-v4-pro"]
}

export function allAvailableModels(): Array<string> {
  return availableChatModels().concat(availableReasoningModels(), availableCompletionModels())
}
