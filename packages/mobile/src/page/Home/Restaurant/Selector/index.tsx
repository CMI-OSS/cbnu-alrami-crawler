import classNames from "classnames";
import BorderBox from "src/components/atoms/BorderBox";
import { CAFETERIA_LIST } from "src/consts";
import { Restaurant } from "src/type";

import ConfirmModal from "./ComfirmModal";
import $ from "./style.module.scss";
import useConfirmModal from "./useConfirmModal";

type Props = {
  cafeteriaName: Restaurant;
  onSelectorCancel: () => void;
  onCafeteriaSelect: (name: Restaurant) => void;
  className?: string;
};

const SELECTOR_ITEMS = [
  ...CAFETERIA_LIST,
  { name: "표시 안함", id: 0 },
] as const;

function Selector({
  cafeteriaName,
  onSelectorCancel,
  onCafeteriaSelect,
  className,
}: Props) {
  const {
    isConfirmOpen,
    handleAgreeClick,
    handleCloseModalClick,
    handleSelect,
  } = useConfirmModal(onCafeteriaSelect);

  return (
    <div className={$["dimmed-box"]}>
      <BorderBox
        height="auto"
        width={328}
        className={classNames($.selector, className)}
      >
        <span className={$["selector-title"]}>식당 선택</span>
        <ul>
          {SELECTOR_ITEMS.map(({ name, id }) => {
            return (
              <li key={id} className={$.item}>
                <button
                  type="button"
                  className={classNames($.button, {
                    [$.selected]: name === cafeteriaName,
                  })}
                  onClick={() => {
                    return handleSelect(name as Restaurant);
                  }}
                  aria-label={`${name} 선택하기`}
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
        <button type="button" className={$.cancel} onClick={onSelectorCancel}>
          취소
        </button>
      </BorderBox>
      {isConfirmOpen && (
        <ConfirmModal
          onAgreeClick={handleAgreeClick}
          onCancelClick={handleCloseModalClick}
        />
      )}
    </div>
  );
}

export default Selector;
