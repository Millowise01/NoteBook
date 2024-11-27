import React, { createContext, useState } from 'react';

const PageContext = createContext({});
const PageProvider = PageContext.Provider;

export { PageContext, PageProvider };

const App = () => {
  const [data, loading] = useFetch('http://localhost:3000/pages'); // Assuming useFetch hook is defined elsewhere
  const [pages, setPages] = useState(data);
  const [activePage, setActivePage] = useState(data ? data[0] : null);

  useEffect(() => {
    if (data) {
      setPages(data);
      setActivePage(data[0]);
    }
  }, [data]);

  const context = {
    sidebar: [pages, setPages],
    page: [activePage, setActivePage]
  };

  return (
    <PageProvider value={context}>
      {loading ? <div>loading...</div> : (
        <>
          <Sidebar />
          {activePage && <Page />}
        </>
      )}
    </PageProvider>
  );
};

export default App;
