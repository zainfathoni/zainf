// Shared rules for the /ama question form. Used by the browser UI and the server action.

export const AMA_MIN_QUESTION_LENGTH = 10;
export const AMA_MAX_QUESTION_LENGTH = 2000;

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isValidAmaId(id: string) {
  return UUID_PATTERN.test(id);
}

export function amaQuestionLength(question: string) {
  return [...question].length;
}
