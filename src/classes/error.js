// @flow

const someMessage = "Yep, here we are";
const someNum = 67;

export class FlippourError {
  createError(err: string) {
    return {
      type: someNum,
      someMessage: someMessage,
      error: err
    };
  }

  isFlippourError(something: any) {
    if (
      something.type !== "undefined" && something.someMessage !== "undefined"
    ) {
      if (someting.type === someNum && something.someMessage === someMessage) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  generalError() {
    return "An unexpected error has occurred.";
  }
}
