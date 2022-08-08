import { FC, memo } from "react";
// modules
import styled from "styled-components";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
// Redux
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  handleClickNextSlideAction,
  handleClickPreviousSlideAction,
  slideListSelector,
  toggleDisplayOrHideSlideListAction,
} from "../../redux/features/slideListSlice";
// Types
import { SlideListItemType } from "../../types/lesson/slideListTypes";
// Components
import { SlideListItemContent } from "../../components/molecules";
import { SlideListItem } from "../../components/organisms";
// Images
import Analytics from "../../assets/images/illustrations/analytics.svg";

// スライドのコンテンツを配列で管理
export const slideListItems: SlideListItemType[] = [
  {
    classTitle: "ロジカルシンキング基本編「帰納法」",
    slideTitle: "帰納法の使い方①",
    content: (
      <SlideListItemContent icon={TipsAndUpdatesIcon} image={Analytics} title="複数の情報を揃える">
        帰納法の最初のステップは「複数の情報を揃える」ことです。
      </SlideListItemContent>
    ),
  },
  {
    classTitle: "ロジカルシンキング基本編「帰納法」",
    slideTitle: "帰納法の使い方②",
    content: (
      <SlideListItemContent icon={TipsAndUpdatesIcon} image={Analytics} title="複数の情報を揃える">
        帰納法の最初のステップは「複数の情報を揃える」ことです。
      </SlideListItemContent>
    ),
  },
  {
    classTitle: "ロジカルシンキング基本編「帰納法」",
    slideTitle: "帰納法の使い方③",
    content: (
      <SlideListItemContent icon={TipsAndUpdatesIcon} image={Analytics} title="複数の情報を揃える">
        帰納法の最初のステップは「複数の情報を揃える」ことです。
      </SlideListItemContent>
    ),
  },
];

// スライド本体
const SlideList: FC = memo(() => {
  const dispatch = useAppDispatch();
  const slideList = useAppSelector(slideListSelector);
  const slideId = slideList.slideId;
  const direction = slideList.direction;
  const isOpen = slideList.isOpen;
  const lastSlideNumber = slideListItems.length - 1;

  return (
    <>
      {isOpen && (
        <SSlideList>
          {slideListItems.map((item, index) => (
            <SlideListItem
              itemId={slideId}
              position={index - slideId} // 表示中のスライドに対するスライドの位置（0は表示中）
              direction={direction} // スライドの進行方向
              key={index}
              isFirst={index === 0} // 最初のスライドか？
              isLast={index === lastSlideNumber} // 最後のスライドか？
              classTitle={item.classTitle}
              slideTitle={item.slideTitle}
              next={() => dispatch(handleClickNextSlideAction())}
              previous={() => dispatch(handleClickPreviousSlideAction())}
              close={() => dispatch(toggleDisplayOrHideSlideListAction())}
            >
              {item.content}
            </SlideListItem>
          ))}
        </SSlideList>
      )}
    </>
  );
});

export default SlideList;

const SSlideList = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.palette.secondaryBackgroundColor.main};
  overflow: hidden;
  display: flex;
`;
