import React from 'react';

import { StyledOlTag, StyledQuotes, StyledUlTag } from './style';

type AlignValues = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify';

const Elements = ({
  attributes,
  children,
  element,
}: {
  attributes: object;
  children: React.ReactNode;
  element: {
    type: string;
    align: AlignValues;
  };
}) => {
  const style: React.CSSProperties = { textAlign: element.align };
  switch (element.type) {
    case 'block-quote':
      return (
        <StyledQuotes style={style} {...attributes}>
          {children}
        </StyledQuotes>
      );
    case 'bulleted-list':
      return (
        <StyledUlTag style={style} {...attributes}>
          {children}
        </StyledUlTag>
      );
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case 'numbered-list':
      return (
        <StyledOlTag style={style} {...attributes}>
          {children}
        </StyledOlTag>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

export default Elements;
