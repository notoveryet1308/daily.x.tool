import { tagType } from "../../Context/types";

export type BookmarkInputField = {
  id: string;
  ogImg?: string;
  ogTitle?: string;
  ogUrl?: string;
  tags: tagType[] | [];
  ogSiteName?: string;
  ogDescription?: string;
  hexCode?: string;
};
