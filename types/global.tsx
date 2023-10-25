import React from 'react';
export interface VariantTypes {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'error'
    | 'caption'
    | 'caption_main'
    | 'yellow';
}

export type imageCardTypes = {
  title: string;
  description: string;
  circleColor: string;
  themeColor: string;
  icon: React.ReactNode;
  buttonVariant: 'outlined' | 'contained';
  darkText: boolean;
};

export type profileOptionTypes = {
  title: string;
  icon: React.ReactNode;
  route?: string;
};
