import { ServiceException } from "@/services/shared/ServiceException";
import { VError } from "@netflix/nerror";
import Info = VError.Info;

export class ApiGithubServiceException extends ServiceException {
  constructor(message: string, cause: Error, info: Info) {
    super("ApiGithubServiceException", message, cause, info);
  }
}
