import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem, Box, Flex, Square } from '@chakra-ui/react';
import TopCollectionsTable from '../../modules/Tables/TopCollections';
import LeftTable from '../../modules/Tables/LeftTable';
import ScatterChart from '../../modules/Charts/Scatter';

const Home = () => {
  return (
    <Box w={'full'}>
      <Heading size="xl" marginBottom={6} marginTop={10} padding={20}>
        Real-time market insights, more NFT alpha
      </Heading>
      {/* <Flex w={'full'}>
        <div className='w-1/3'>
          <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
            <TableContainer w={'full'}>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Token</Th>
                    <Th>Value</Th>
                    <Th isNumeric>Address</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {balances?.map(({ token, value }, key) => (
                    <Tr key={`${token?.symbol}-${key}-tr`} _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                      <Td>
                        <HStack>
                          <Avatar size="sm" src={token?.logo || ''} name={token?.name} />
                          <VStack alignItems={'flex-start'}>
                            <Text as={'span'}>{token?.name}</Text>
                            <Text fontSize={'xs'} as={'span'}>
                              {token?.symbol}
                            </Text>
                          </VStack>
                        </HStack>
                      </Td>
                      <Td>{value}</Td>
                      <Td isNumeric>{getEllipsisTxt(token?.contractAddress || '')}</Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Token</Th>
                    <Th>Value</Th>
                    <Th isNumeric>Address</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
        </div>
      </Flex> */}
      <div className="grid auto-cols-min auto-rows-min grid-cols-7 pt-12" style={{ gap: '24px' }}>
        <div className="col-span-2 flex w-full flex-col">
          <TopCollectionsTable />
        </div>
        <div className="col-span-3 flex w-full flex-col">
          <div className="bg-elevation-1 flex h-full flex-col overflow-x-clip rounded-xl">
            <div style={{ maxHeight: '100%' }}>
              <div className="flex flex-row overflow-hidden text-ellipsis whitespace-nowrap py-2 px-4">
                <p className="text-primary-text text-base font-extrabold antialiased">24 hour sales history</p>
                <p className="text-secondary-text pl-1 text-base font-extrabold antialiased">
                  for ENS: Ethereum Name Service
                </p>
              </div>
              <div className="bg-primary-border h-[0.050rem] w-full"></div>
              <div className="bg-elevation-2 m-3 rounded p-2">
                <ScatterChart />
                <div
                  className="highcharts-loading highcharts-loading-hidden"
                  style={{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    opacity: '0',
                    textAlign: 'center',
                    color: 'rgb(226, 232, 240)',
                    fontFamily: 'Helvetica',
                    zIndex: '10',
                    left: '65px',
                    top: '10px',
                    width: '467px',
                    height: '253px',
                    display: 'none',
                  }}
                >
                  <span
                    className="highcharts-loading-inner"
                    style={{ fontWeight: 'bold', position: 'relative', top: '45%' }}
                  >
                    Loading data...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <div className="bg-elevation-1 flex h-full flex-col overflow-x-clip rounded-xl">
            <div style={{ maxHeight: '100%' }}>
              <div className="flex flex-row overflow-hidden text-ellipsis whitespace-nowrap py-2 px-4">
                <p className="text-primary-text text-base font-extrabold antialiased">Activity feed</p>
                <p className="text-secondary-text pl-1 text-base font-extrabold antialiased">
                  for ENS: Ethereum Name Service
                </p>
              </div>
              <div className="bg-primary-border h-[0.050rem] w-full"></div>
              <div className="flex flex-col" style={{ gap: '12px' }}>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="dark:border-gray-80 overflow-hidden border-b border-gray-200 last:border-b-0">
                      <div className="flex flex-col" style={{ gap: '12px' }}>
                        <LeftTable />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Home;
