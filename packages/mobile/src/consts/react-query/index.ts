import {
  ArticleApiService,
  BoardApiService,
  CafeteriaMenu,
} from "@shared/swagger-api/generated";
import { GetParams } from "src/type/utils";

export const queryKey = {
  // article 도메인
  popularArticles: (
    params?: GetParams<
      typeof ArticleApiService.articleControllerFindPopularArticles
    >,
  ) => {
    return [ "popularArticles", params ];
  },
  subscribeArticles: (
    params?: GetParams<
      typeof ArticleApiService.articleControllerFindSubscribeArticle
    >,
  ) => {
    return [ "subscribeArticles", params ];
  },
  bookmarkArticles: (
    params?: GetParams<
      typeof ArticleApiService.articleControllerFindBookmarkArticle
    >,
  ) => {
    return [ "bookmarkArticles", params ];
  },
  article: (
    params: GetParams<typeof ArticleApiService.articleControllerFindOne>,
  ) => {
    return [ "article", params ];
  },
  // board 도메인
  boardArticles: (
    params: GetParams<typeof BoardApiService.boardControllerFindArticlePage>,
  ) => {
    return [ "boardArticles", params ];
  },
  subscribeBoards: (
    params: GetParams<
      typeof BoardApiService.boardControllerFindSubscribeBoards
    >,
  ) => {
    return [ "subscribeBoards", params ];
  },
  boards: (params: GetParams<typeof BoardApiService.boardControllerFind>) => {
    return [ "boards", params ];
  },
  board: (params: GetParams<typeof BoardApiService.boardControllerFindOne>) => {
    return [ "board", params ];
  },

  bookmarkSchedules: [ "bookmarkSchedules" ],
  weathers: [ "weathers" ],
  schedules: [ "schedules" ],
  todaysSchedules: [ "todaysSchedules" ],
  cafeteria: (name: CafeteriaMenu["name"], date: CafeteriaMenu["date"]) => {
    return [ "cafeteria", name, date ];
  },
  schools: [ "schools" ],
  school: (placeId: number) => {
    return [ "school", placeId ];
  },
};
