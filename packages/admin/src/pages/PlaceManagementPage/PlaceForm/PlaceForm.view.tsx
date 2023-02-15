import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { PlaceSchoolDto } from "@shared/swagger-api/generated/models/PlaceSchoolDto";
import AddForm from "src/components/PlaceManagement/AddForm";
import UploadImage from "src/pages/BoardPage/ArticleWrite/UploadImage/UploadImage";
import { SchoolAddFormErrors } from "src/types/place";

import $ from "./style.module.scss";

export type PlaceFormViewProps = {
  apiKindMsg: string;
  errMsg: string;
  isAdd: boolean;
  onSubmit: SubmitHandler<Omit<PlaceSchoolDto, "imageIds">>;
  handleSubmit: UseFormHandleSubmit<Omit<PlaceSchoolDto, "imageIds">>;
  register: UseFormRegister<Omit<PlaceSchoolDto, "imageIds">>;
  errors: SchoolAddFormErrors;
};

export default function PlaceFormView(props: PlaceFormViewProps) {
  const { apiKindMsg, errMsg, isAdd, errors } = props;
  const { onSubmit, handleSubmit, register } = props;
  return (
    <div className={$.container}>
      <header>
        <h1 className={$.title}>건물 {apiKindMsg} 페이지</h1>
      </header>
      <main className={$.main}>
        <section>
          <UploadImage />
          <span className={$["error-message"]}>{errMsg}</span>
          <AddForm
            isAdd={isAdd}
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
          />
        </section>
      </main>
    </div>
  );
}
