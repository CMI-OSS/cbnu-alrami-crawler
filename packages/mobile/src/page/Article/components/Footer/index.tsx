import { Internet, Star } from "@components/atoms/icon";
import {
  useDeleteBookmarkArticleMutation,
  usePostBookmarkArticleMutation,
} from "@hooks/api/article";
import ShareButton from "src/components/atoms/ShareButton";

import $ from "./style.module.scss";

type Props = {
  articleId: number;
  isBookmark: boolean;
  isUser: boolean;
  url?: string;
};

function ArticleFooter({ articleId, isBookmark, isUser, url }: Props) {
  const postBookmark = usePostBookmarkArticleMutation({ id: articleId });
  const deleteBookmark = useDeleteBookmarkArticleMutation({
    id: articleId,
  });

  const toggleBookmark = () => {
    if (isBookmark) {
      deleteBookmark.mutate({ id: articleId });
      return;
    }
    postBookmark.mutate({ id: articleId });
  };

  const handleClickUrl = () => {
    window.open(url);
  };

  return (
    <div className={$["article-footer"]}>
      <ShareButton
        size={24}
        stroke="#5e5e5e"
        successMsg="공지 링크가 클립보드에 복사되었습니다."
      />
      {isUser && (
        <button type="button" onClick={toggleBookmark}>
          <Star
            size={24}
            stroke={isBookmark ? "#D66D6E" : "#5e5e5e"}
            fill={isBookmark ? "#D66D6E" : ""}
          />
        </button>
      )}
      {url && (
        <button type="button" onClick={handleClickUrl}>
          <Internet size={24} stroke="#5e5e5e" />
        </button>
      )}
    </div>
  );
}

export default ArticleFooter;
