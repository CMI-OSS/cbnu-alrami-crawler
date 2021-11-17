import { useState, useEffect } from "react";
import { cx } from "@emotion/css";
import { useForm } from "react-hook-form";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import getStyle from "./style";

type Props = {
  inputId: string;
  inputPw: string;
};

export default function LoginForm() {
  const [message, setMessage] = useState("");
  const [isClassNameId, setClassNameId] = useState(false);
  const [isClassNamePw, setClassNamePw] = useState(false);
  const [isLock, setLock] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const id = register("id", { required: true });
  const password = register("password", { required: true });

  useEffect(() => {
    if (errors.id) {
      setMessage("아이디를 입력해주세요.");
      return;
    }
    if (errors.password) {
      setMessage("비밀번호를 입력해주세요.");
      return;
    }
    setMessage("");
  }, [errors.id, errors.password]);

  const style = getStyle();

  const onSubmit = (data: Props) => {
    console.log(data);
  };

  return (
    <main className={style.loginForm}>
      <span className={style.title}>CMI 관리자</span>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div
          className={cx(style.box, style.idBox, {
            [style.focus]: isClassNameId,
          })}
        >
          <IoPersonOutline className={style.icon} />
          <input
            className={style.input}
            placeholder="아이디"
            name={id.name}
            onChange={id.onChange}
            onFocus={() => setClassNameId(true)}
            onBlur={() => setClassNameId(false)}
            ref={id.ref}
          />
        </div>
        <div
          className={cx(style.box, style.pwBox, {
            [style.focus]: isClassNamePw,
          })}
        >
          <button
            className={style.lockBox}
            type="button"
            onClick={() => setLock(!isLock)}
          >
            {isLock ? (
              <AiOutlineLock className={style.lock} />
            ) : (
              <AiOutlineUnlock className={style.unLock} />
            )}
          </button>
          <input
            type={isLock ? "password" : "text"}
            className={style.input}
            placeholder="비밀번호"
            name={password.name}
            onChange={password.onChange}
            onFocus={() => setClassNamePw(true)}
            onBlur={() => setClassNamePw(false)}
            ref={password.ref}
          />
        </div>
        <p className={style.message}>{message}</p>

        <input className={style.submit} type="submit" value="로그인" />
      </form>
      <img
        className={style.img}
        alt="우왕이와 친구들"
        src="https://user-images.githubusercontent.com/62797441/141838255-94117137-98fb-4159-920b-5c9051e6998a.jpg"
      />
    </main>
  );
}
