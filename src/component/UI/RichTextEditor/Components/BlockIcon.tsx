import React from 'react';
import {
  TextBolder,
  TextUnderline,
  TextItalic,
  TextHOne,
  TextHTwo,
  Quotes,
  ListNumbers,
  ListBullets,
  TextAlignLeft,
  TextAlignRight,
  TextAlignCenter,
  Code,
  TextAlignJustify,
} from 'phosphor-react';

const BlockIcon = {
  bold: ({ active }: { active: boolean }) => (
    <TextBolder
      className='bold-icon ph-icon'
      weight={active ? 'bold' : 'regular'}
    />
  ),
  underline: ({ active }: { active: boolean }) => (
    <TextUnderline
      className='underline-icon ph-icon'
      weight={active ? 'bold' : 'regular'}
    />
  ),
  italic: ({ active }: { active: boolean }) => (
    <TextItalic
      className='italic-icon ph-icon'
      weight={active ? 'bold' : 'regular'}
    />
  ),
  h1: ({ active }: { active: boolean }) => (
    <TextHOne
      className='hOne-icon ph-icon'
      weight={active ? 'bold' : 'regular'}
    />
  ),
  h2: ({ active }: { active: boolean }) => (
    <TextHTwo
      className='hTwo-icon ph-icon'
      weight={active ? 'bold' : 'regular'}
    />
  ),
  quote: ({ active }: { active: boolean }) => (
    <Quotes
      className='quote-icon ph-icon'
      weight={active ? 'bold' : 'regular'}
    />
  ),
  listNumber: ({ active }: { active: boolean }) => (
    <ListNumbers
      className='list-number-icon ph-icon'
      weight={active ? 'bold' : 'regular'}
    />
  ),
  listBullets: ({ active }: { active: boolean }) => (
    <ListBullets
      className='list-bullets-icon ph-icon'
      weight={active ? 'bold' : 'regular'}
    />
  ),
  alignLeft: ({ active }: { active: boolean }) => (
    <TextAlignLeft
      className='text-left-icon ph-icon'
      weight={active ? 'bold' : 'regular'}
    />
  ),
  alignRight: ({ active }: { active: boolean }) => (
    <TextAlignRight className='text-right-icon ph-icon' />
  ),
  alignCenter: ({ active }: { active: boolean }) => (
    <TextAlignCenter
      className='text-center-icon ph-icon'
      weight={active ? 'bold' : 'regular'}
    />
  ),
  code: ({ active }: { active: boolean }) => (
    <Code className='code-icon ph-icon' weight={active ? 'bold' : 'regular'} />
  ),
  justify: ({ active }: { active: boolean }) => (
    <TextAlignJustify
      className='text-justify-icon ph-icon'
      weight={active ? 'bold' : 'regular'}
    />
  ),
};

export default BlockIcon;
