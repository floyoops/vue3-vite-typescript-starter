import http from "@/http-common";
import RepoGithub from "@/types/RepoGithub";
import { injectable } from "inversify";
import { ApiGithubServiceException } from "@/services/api-github-service/ApiGithubServiceException";
import { VError } from "@netflix/nerror";
import Info = VError.Info;

@injectable()
class ApiGithubService {
  async getOneRepository(username: string, repository: string): Promise<RepoGithub> {
    let result: RepoGithub;
    const url = `/repos/${username}/${repository}`;
    try {
      result = await http.get(url);
    } catch (err) {
      throw ApiGithubService.newException("Error on getOneRepository", err, { username, repository, url });
    }
    return result;
  }

  async getAllRepositories(username: string): Promise<RepoGithub[]> {
    let result: RepoGithub[] = [];
    const url = `/users/${username}/repos`;
    try {
      result = await http.get(url);
    } catch (err) {
      throw ApiGithubService.newException("Error on getAllRepositories", err, { username, url });
    }

    return result;
  }

  private static newException(message: string, cause: Error, info: Info) {
    return new ApiGithubServiceException(message, cause, info);
  }
}

export { ApiGithubService };
