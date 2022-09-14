const Table = () => {
  return (
    <div className="bg-elevation-1 flex h-full flex-col overflow-x-clip rounded-xl">
      <div style={{ maxHeight: '100%' }}>
        <div className="flex flex-row overflow-hidden text-ellipsis whitespace-nowrap py-2 px-4">
          <p className="text-primary-text text-base font-extrabold antialiased">Top 5 collections</p>
          <p className="text-secondary-text pl-1 text-base font-extrabold antialiased">from this week</p>
        </div>
        <div className="bg-primary-border h-[0.050rem] w-full"></div>
        <div className="flex flex-col" style={{ gap: '12px' }}>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="dark:border-gray-80 overflow-hidden border-b border-gray-200 last:border-b-0">
                <div className="flex flex-col" style={{ gap: '12px' }}>
                  <table className="min-w-full">
                    <tbody className="divide-primary-border bg-elevation-1 divide-y">
                      <tr className="bg-elevation-2/60 w-full rounded-none">
                        <td className="whitespace-nowrap">
                          <div className="cursor-pointer" role="button" tabIndex={0}>
                            <div className="flex flex-row items-center p-3" style={{ gap: '18px' }}>
                              <div className="flex flex-row">
                                <img
                                  className="h-full w-full rounded-full"
                                  alt="ENS: Ethereum Name Service"
                                  loading="lazy"
                                  src="https://lh3.googleusercontent.com/0cOqWoYA7xL9CkUjGlxsjreSYBdrUBE0c6EO1COG4XE8UeP-Z30ckqUNiL872zHQHQU5MUNMNhfDpyXIP17hRSC5HQ=s60"
                                  style={{ height: '40px', width: '40px' }}
                                />
                              </div>
                              <div className="flex flex-col">
                                <p
                                  className="text-primary-text overflow-hidden text-ellipsis text-sm font-extrabold antialiased"
                                  style={{ maxWidth: '200px' }}
                                >
                                  ENS: Ethereum Name Service
                                </p>
                                <div className="font-favoritMono text-tertiary-text text-sm font-light">
                                  2,245,708<span className="font-favorit pl-2">tokens</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap">
                          <div className="cursor-pointer" role="button" tabIndex={0}>
                            <div className="text-primary-text text-sm font-extrabold antialiased">
                              <span className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 6 9"
                                  fill="currentColor"
                                  className="text-gray-50"
                                  width="16"
                                  height="16"
                                >
                                  <path d="M5.566 4.56 2.761 0 0 4.562l2.782 1.66 2.784-1.663Z"></path>
                                  <path d="m5.566 5.116-2.79 1.625L0 5.116 2.782 9l2.784-3.884Z"></path>
                                </svg>
                                <span className="pl-1">0.004</span>
                              </span>
                              <div className="flex flex-row items-center">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="text-green mr-1 -rotate-45"
                                  width="14"
                                  height="14"
                                >
                                  <path
                                    d="m14 5 7 7m0 0-7 7m7-7H3"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke="currentColor"
                                  ></path>
                                </svg>
                                <span className="font-favoritMono text-green text-xs font-semibold">7.25%</span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
