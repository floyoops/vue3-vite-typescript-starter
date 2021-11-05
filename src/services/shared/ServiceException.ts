import { VError } from "@netflix/nerror";
import Info = VError.Info;

export abstract class ServiceException extends VError {
  protected constructor(name: string, message: string, cause: Error, info: Info) {
    super({ name, cause, info }, message);
  }
}
