import { useState } from "react";

import {
  BookBookmark,
  PencilSimple,
  Trash,
  CheckCircle,
  Link as LinkIcon,
} from "phosphor-react";
import { StyledBookmarViewCard } from "./style";
import Tags from "../../Tags";
import { tagType } from "../../../Context/types";
import { useScreenWidth } from "../../../hooks";
import { breakpoints } from "../../../theme/breakpoint";

import { useDeleteBookmark, useLinkCopy } from "./hook";

const dummyOGImg =
  "https://images.unsplash.com/photo-1675438321407-b458c45a71d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";

type BookmarkPropType = {
  id: string;
  ogImg?: string;
  ogTitle?: string;
  ogUrl?: string;
  tags: tagType[];
  ogSiteName?: string;
  ogDescription?: string;
  hexCode: string;
};

const BookmarkViewCard = ({
  id,
  ogImg = dummyOGImg,
  ogTitle = "Subscriptions in GraphQL with Apollo 2.0.",
  ogUrl = "https://medium.com/@itReverie/subscriptions-in-graphql-with-apollo-2-0-6db44401f009",
  tags = [
    { id: "x1", label: "medium", value: "medium" },
    { id: "x2", label: "medium2", value: "medium-2" },
    { id: "x3", label: "medium3", value: "medium-3" },
  ],
  hexCode,
  ogSiteName = "medium.com",
  ogDescription = "In this article we will create a small application to create real time messages and update the favorite ones by using subscriptions with GraphQL, Apollo Server, Apollo Client and React.",
}: BookmarkPropType) => {
  const { handleBookmarDeletion, bookmarkDeleteQuery } = useDeleteBookmark();
  const { isLinkCopied, copyLinkText } = useLinkCopy();
  const [screenWidth] = useScreenWidth();
  const [isActionsVisible, setActionsVisible] = useState(false);
  const inMobile = screenWidth <= breakpoints.LARGE_MOBILE;

  return (
    <StyledBookmarViewCard
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
                <CheckCircle className="bkm-icon check" />
              )}
              {/* <PencilSimple className="bkm-icon edit" /> */}
              <Trash
                className="bkm-icon delete"
                onClick={() => {
                  handleBookmarDeletion(id);
                }}
              />
            </>
          )}
        </div>
      </div>
      <div className="bkm-info-content">
        {ogTitle && (
          <h2 role="title" className="bkm-title">
            {ogTitle}
          </h2>
        )}
        {ogDescription && (
          <p className="bkm-description" role="description">
            {ogDescription}
          </p>
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
    </StyledBookmarViewCard>
  );
};

export default BookmarkViewCard;
