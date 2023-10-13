import {Color} from '../constant';
type variantTypes = {
  type: string;
  size: number;
  color: string;
};

export const Vartiants: variantTypes[] = [
  {
    type: 'h1',
    size: 32,
    color: Color.text_color,
  },
  {
    type: 'h2',
    size: 28,
    color: Color.text_color,
  },
  {
    type: 'h3',
    size: 24,
    color: Color.text_color,
  },
  {
    type: 'h4',
    size: 20,
    color: Color.text_color,
  },
  {
    type: 'h5',
    size: 16,
    color: Color.text_color,
  },
  {
    type: 'caption',
    size: 14,
    color: Color.sub_text,
  },
  {
    type: 'caption_main',
    size: 14,
    color: Color.text_color,
  },
  {
    type: 'h6',
    size: 12,
    color: Color.text_color,
  },
  {
    type: 'subtitle1',
    size: 12,
    color: Color.sub_text,
  },
  {
    type: 'subtitle2',
    size: 10,
    color: Color.sub_text,
  },
  {
    type: 'error',
    size: 12,
    color: Color.error_text,
  },
  {
    type: 'yellow',
    size: 14,
    color: Color.yellow_main,
  },
];
