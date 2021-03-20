import { Entry } from 'contentful';
import React from 'react';
import { IPage, IPageFields } from '../lib/contentful';

export const PageContext = React.createContext<IPageFields | undefined>(undefined);
