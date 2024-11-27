import React, { useContext } from 'react';
import { PageContext } from '../context/page';

const Navigation = ({ pages }) => {
  const { page } = useContext(PageContext);
  const [activePage, setActivePage] = page;

  return (
    <ul>
      {
