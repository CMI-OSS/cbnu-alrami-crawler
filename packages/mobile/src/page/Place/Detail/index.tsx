import { LeftArrow } from "@components/atoms/icon";
import ChipGroup from "@components/molecules/ChipGroup";
import FullPageModalTemplate from "@components/templates/FullPageModalTemplate";
import { PlaceSchoolDto } from "@shared/swagger-api/generated";
import { useSchoolQuery } from "src/hooks/api/school";
import useSearch from "src/hooks/useSearch";
import DetailGroup from "src/page/Place/DetailGroup";
import { useAppDispatch } from "src/store";
import { setHashMenu } from "src/store/placeSlice";

import { menuList } from "../../../__mocks__/index";
import $ from "./style.module.scss";

function PlaceDetail() {
  const dispatch = useAppDispatch();
  const position = useSearch({ target: "position" })!;
  const currentPosition =
    position === "all" ? undefined : position.split("")[0].toUpperCase();
  const {
    data: schoolData,
    isLoading: schoolLoading,
    isError: schoolError,
  } = useSchoolQuery({
    area: currentPosition as PlaceSchoolDto["school"]["area"],
  });
  if (schoolLoading) return <div>로딩중입니다.</div>;
  if (schoolError) return <div>에러가 발생했습니다.</div>;
  if (schoolData === undefined)
    return <div>캠퍼스 장소 리스트 불러오기 실패</div>;

  const handleMenu = () => {
    dispatch(setHashMenu({ hashString: position }));
  };

  const schoolDatas = schoolData.filter((item: PlaceSchoolDto) => {
    return (
      item?.school.area === currentPosition || currentPosition === undefined
    );
  });

  const checkMenu = (position: string) => {
    switch (position) {
      case undefined:
        return 0;
      case "north":
        return 1;
      case "east":
        return 2;
      case "south":
        return 3;
      default:
        return 0;
    }
  };

  return (
    <FullPageModalTemplate
      left={<LeftArrow stroke="#5e5e5e" size={16} />}
      title="캠퍼스맵"
    >
      <ChipGroup
        list={menuList}
        handleSelectMenu={handleMenu}
        selectedMenu={checkMenu(position)}
      />
      {/* [D] 식당 작업 후 진행 예정 */}
      {/* <NavLink to="/call" className={$.place_link}>
          제보하기
        </NavLink> */}
      <DetailGroup schoolDatas={schoolDatas} />
    </FullPageModalTemplate>
  );
}

export default PlaceDetail;
