import { StyledToolbar } from './style';

import { MarkButton, BlockButton } from './Blocks';
import BlockIcon from './BlockIcon';

const Toolbar = () => {
  return (
    <StyledToolbar>
      <MarkButton format='bold' icon={BlockIcon['bold']} />
      <MarkButton format='italic' icon={BlockIcon['italic']} />
      <MarkButton format='underline' icon={BlockIcon['underline']} />
      <MarkButton format='code' icon={BlockIcon['code']} />
      <BlockButton format='heading-one' icon={BlockIcon['h1']} />
      <BlockButton format='heading-two' icon={BlockIcon['h2']} />
      <BlockButton format='block-quote' icon={BlockIcon['quote']} />
      <BlockButton format='numbered-list' icon={BlockIcon['listNumber']} />
      <BlockButton format='bulleted-list' icon={BlockIcon['listBullets']} />
      <BlockButton format='left' icon={BlockIcon['alignLeft']} />
      <BlockButton format='center' icon={BlockIcon['alignCenter']} />
      <BlockButton format='right' icon={BlockIcon['alignRight']} />
      <BlockButton format='justify' icon={BlockIcon['justify']} />
    </StyledToolbar>
  );
};

export default Toolbar;
