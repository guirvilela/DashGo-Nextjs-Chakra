import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { RiAddLine } from 'react-icons/ri';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';
import TableUsers from '../../components/TableUsers';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Th>

                <Th> Usuário </Th>
                {isWideVersion && <Th> Data de cadastro </Th>}
                <Th width="8"> </Th>
              </Tr>
            </Thead>

            <TableUsers
              name="Guilherme Vilela"
              email="guirvilela@gmail.com"
              date="4 de Abril, 2021"
              isWideVersion={isWideVersion}
            />
            <TableUsers
              name="Diego Fernandes"
              email="diego.shell.f@gmail.com"
              date="19 de Agosto, 2021"
              isWideVersion={isWideVersion}
            />
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}