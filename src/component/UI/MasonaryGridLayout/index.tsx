import React, { useEffect } from 'react';
import { StyledMasonryGridWrapper } from './style';

const resizeMasonryItem = (item) => {
  let grid = document.getElementsByClassName('masonry')[0];
  let rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
  );
  let rowHeight = parseInt(
    getComputedStyle(grid).getPropertyValue('grid-auto-rows')
  );

  let rowSpan = Math.ceil(
    (item.querySelector('.masonry-content').getBoundingClientRect().height +
      rowGap) /
      (rowHeight + rowGap)
  );
  item.style.gridRowEnd = 'span ' + rowSpan;

  console.log({
    rowHeight,
    rowSpan,
    rowGap,
    iH: item.querySelector('.masonry-content').getBoundingClientRect().height,
  });
};

function resizeAllMasonryItems() {
  let allItems = document.getElementsByClassName('masonry-brick');
  for (let i = 0; i < allItems.length; i++) {
    resizeMasonryItem(allItems[i]);
  }
}

const MasonryGridLayout = ({
  minWidth,
  children,
}: {
  minWidth: number;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    resizeAllMasonryItems();
  }, [children]);
  return (
    <StyledMasonryGridWrapper minWidth={minWidth} className='masonry'>
      {children}
    </StyledMasonryGridWrapper>
  );
};

export default MasonryGridLayout;
