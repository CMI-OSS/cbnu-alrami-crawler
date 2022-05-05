import React, { useEffect, useState } from "react";

import classNames from "classnames";
import { useImgUploadMutation } from "src/services/boardWriteApi";

import { LoadingSpinner, ToastMsg } from "../AtomicUi";
import $ from "./style.module.scss";

export default function ImgUpload() {
  const [ isFetched, setIsFetched ] = useState<boolean>(false);
  const [ imgSrcList, setImgSrcList ] = useState<string[]>([]);
  const [ imgUpload, { isLoading, isSuccess } ] = useImgUploadMutation();

  useEffect(() => {
    if (isFetched) {
      setTimeout(() => setIsFetched(false), 1000);
    }
  }, [ isFetched ]);

  const onLoadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const formData = new FormData();
    if (files) {
      const filesArr = Array.from(files);
      filesArr.forEach((file) => {
        formData.append("image", file);
      });

      try {
        const data = await imgUpload(formData).unwrap();
        setIsFetched(true);
        setImgSrcList([ ...imgSrcList, ...data ]);
      } catch {
        setIsFetched(true);
      }
    }
  };

  return (
    <>
      <label
        htmlFor="chooseFile"
        className={classNames($["file-label"], { [$.isLoading]: isLoading })}
      >
        {isLoading ? (
          <LoadingSpinner width={1.27} borderWidth={0.14} color="#fff" />
        ) : (
          <>
            <input
              style={{ display: "none" }}
              id="chooseFile"
              type="file"
              multiple
              onChange={onLoadFile}
            />
            파일 선택하기
          </>
        )}
      </label>

      {isFetched && (
        <ToastMsg msg={`이미지 업로드 ${isSuccess ? "성공" : "실패"}`} />
      )}

      {imgSrcList.map((src) => (
        <img key={src} alt="img" src={src} />
      ))}
    </>
  );
}
