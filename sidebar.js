import React, { useContext } from 'react';
import Navigation from './navigation';
import { PageContext } from '../context/page';

const Sidebar = () => {
  const { sidebar } = useContext(PageContext);
  const [pages, setPages] = sidebar;

  return (
    <aside>
      <div className="logo">
        <img src="img/logo.png" alt="Logo" />
        <span>Notlify</span>
      </div>
      <Navigation pages={pages} />
      <button onClick={() => addNewPage()}>+ New Page</button>
    </aside>
  );
};

export default Sidebar;
