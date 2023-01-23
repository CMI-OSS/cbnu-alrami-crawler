import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "src/api/article";
import { authApi } from "src/api/auth";
import { boardWriteApi } from "src/api/board";
import ArticelWriteReducer from "src/pages/BoardPage/ArticleWrite/ArticleWrite.store";
import ImagePreviewReducer from "src/pages/BoardPage/ArticleWrite/UploadImage/ImagePreview/ImagePreview.store";

import boardReducer from "./boardSlice";
import logger from "./loggerMiddleware";
import scraperReducer from "./scraperSlice";

export const store = configureStore({
  reducer: {
    scraperReducer,
    boardReducer,
    ImagePreviewReducer,
    ArticelWriteReducer,
    [articleApi.reducerPath]: articleApi.reducer,
    [boardWriteApi.reducerPath]: boardWriteApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(logger)
      .concat(boardWriteApi.middleware);
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => {
  return useDispatch<AppDispatch>();
};
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
