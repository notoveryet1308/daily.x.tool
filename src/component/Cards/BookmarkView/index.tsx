import { useState } from "react";

import { BookBookmark, PencilSimple, Trash, Link } from "phosphor-react";
import { StyledBookmarViewCard } from "./style";
import Tags from "../../Tags";
import { tagType } from "../../../Context/types";

const dummyOGImg =
  "https://images.unsplash.com/photo-1675438321407-b458c45a71d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";

type BookmarkPropType = {
  ogImg?: string;
  ogTitle?: string;
  url?: string;
  tags: tagType[];
  domain?: string;
  ogDescription?: string;
};

const BookmarkViewCard = ({
  ogImg = dummyOGImg,
  ogTitle = "Subscriptions in GraphQL with Apollo 2.0",
  url = "https://medium.com/@itReverie/subscriptions-in-graphql-with-apollo-2-0-6db44401f009",
  tags = [
    { id: "x1", label: "medium", value: "medium" },
    { id: "x2", label: "medium2", value: "medium-2" },
    { id: "x3", label: "medium3", value: "medium-3" },
  ],
  domain = "medium.com",
  ogDescription = "In this article we will create a small application to create real time messages and update the favorite ones by using subscriptions with GraphQL, Apollo Server, Apollo Client and React.",
}: BookmarkPropType) => {
  const [isActionsVisible, setActionsVisible] = useState(false);

  return (
    <StyledBookmarViewCard
      href={url}
      target="_blank"
      isMouseHover={isActionsVisible}
      onMouseOver={() => {
        setActionsVisible(true);
      }}
      onMouseLeave={() => {
        setActionsVisible(false);
      }}
    >
      <div className="bkm-img-holder">
        {ogImg ? (
          <img src={ogImg} className="bkm-img" loading="lazy" />
        ) : (
          <div className="bkm-img-empty">
            <BookBookmark className="bkm-icon-bookmark" />
          </div>
        )}

        <div className="bkm-actions">
          {isActionsVisible && (
            <>
              {/* <Link className="bkm-icon link" /> */}
              <PencilSimple className="bkm-icon edit" />
              <Trash className="bkm-icon delete" />
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
        {domain && (
          <span className="bkm-domain" role="domain-name">
            {domain}
          </span>
        )}
        {tags && (
          <div className="bkm-tags" role="tag-list">
            {tags.map((d) => (
              <Tags {...d} />
            ))}
          </div>
        )}
      </div>
    </StyledBookmarViewCard>
  );
};

export default BookmarkViewCard;
