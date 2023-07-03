import { useState } from "react";

import {
  BookBookmark,
  PencilSimple,
  Trash,
  CheckCircle,
  Link as LinkIcon,
} from "phosphor-react";
import { StyledBookmarkViewCard } from "./style";
import Tags from "../../../../component/Tags";
import { tagType } from "../../../../Context/types";
import { useScreenWidth } from "../../../../hooks";
import { breakpoints } from "../../../../theme/breakpoint";

import { useLinkCopy } from "./hook";
import BookmarkInputShell from "../BookmarkAction/BookmarkInput";

type BookmarkPropType = {
  id: string;
  ogImg?: string;
  ogTitle?: string;
  ogUrl: string;
  tags: tagType[];
  ogSiteName?: string;
  ogDescription?: string;
  hexCode?: string;
  ogType?: string;
  ogIcon?: string;
  isPreviewAvailable: boolean;
};

const BookmarkViewCard = ({
  id,
  ogImg,
  ogTitle,
  ogUrl,
  tags,
  hexCode = "#772C92",
  ogSiteName,
  ogDescription,
  isPreviewAvailable,
}: BookmarkPropType) => {
  // const { handleBookmarkDeletion, bookmarkDeleteQuery } = useDeleteBookmark();
  const { isLinkCopied, copyLinkText } = useLinkCopy();
  const [screenWidth] = useScreenWidth();
  const [isActionsVisible, setActionsVisible] = useState(false);
  const [openUpdateActionSell, setUpdateOpenActionSell] = useState(false);
  const inMobile = screenWidth <= breakpoints.LARGE_MOBILE;

  const handleUpdateAction = () => {
    setUpdateOpenActionSell(!openUpdateActionSell);
  };

  return (
    <StyledBookmarkViewCard
      href={ogUrl}
      target="_blank"
      isMouseHover={isActionsVisible}
      onMouseOver={() => {
        setActionsVisible(true);
      }}
      onMouseLeave={() => {
        setActionsVisible(false);
      }}
      hexCode={hexCode}
      id={id}
    >
      <div className="bkm-img-holder">
        {ogImg ? (
          <img src={ogImg} className="bkm-img" loading="lazy" />
        ) : (
          <div className="bkm-img-empty">
            <BookBookmark className="bkm-icon-bookmark" />
          </div>
        )}

        <div className="bkm-actions" onClick={(e) => e.preventDefault()}>
          {(isActionsVisible || inMobile) && (
            <>
              {!isLinkCopied ? (
                <LinkIcon
                  className="bkm-icon link"
                  onClick={() => {
                    copyLinkText({ url: ogUrl });
                  }}
                />
              ) : (
                <CheckCircle weight="fill" className="bkm-icon check" />
              )}
              <PencilSimple
                className="bkm-icon edit"
                onClick={handleUpdateAction}
              />
              <Trash className="bkm-icon delete" onClick={() => {}} />
            </>
          )}
        </div>
      </div>
      <div className="bkm-info-content">
        {isPreviewAvailable ? (
          <>
            <h2 role="title" className="bkm-title">
              {ogTitle}
            </h2>
            <p className="bkm-description" role="description">
              {ogDescription}
            </p>
          </>
        ) : (
          <a target="_blank" href={ogUrl} className="bkm-no-preview-url">
            {ogUrl}
          </a>
        )}

        {ogSiteName && (
          <span className="bkm-domain" role="domain-name">
            {ogSiteName}
          </span>
        )}
        {tags && (
          <div className="bkm-tags" role="tag-list">
            {tags.map((d) => (
              <Tags {...d} key={d.id} hexCode={hexCode} />
            ))}
          </div>
        )}
      </div>

      {openUpdateActionSell ? (
        <BookmarkInputShell
          open={openUpdateActionSell}
          toggleShell={handleUpdateAction}
          dataProps={{
            id,
            ogImg,
            ogTitle,
            ogUrl,
            tags,
            hexCode,
            ogSiteName,
            ogDescription,
          }}
        />
      ) : null}
    </StyledBookmarkViewCard>
  );
};

export default BookmarkViewCard;
