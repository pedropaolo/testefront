import { useState } from "react";
import useSWR from "swr";
import axios from "axios";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Spinner,
  Button,
  Input,
  Heading,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

export function UserList() {
  // Hooks useState

  const [pop, setPop] = useState([0, 5]);
  const [searchName, setSearchName] = useState("");
  const [nextState, setnextState] = useState(false);
  const [foundName, setFoundName] = useState(false);
  const [prevState, setprevState] = useState(true);
  const [inicial, setInicial] = useState(true);
  const [usuarios, setUsuarios] = useState(null);

  // Requisição via axios e useSWR

  const fetcher = async (url) =>
    await axios.get(url).then((res) => {
      setUsuarios(res.data);
    });
  const { data, error } = useSWR(
    "https://random-persons.herokuapp.com/users",
    fetcher
  );

  if (!usuarios)
    return (
      <Flex width="100%" height="90vh" justify="center" align="center">
        <Spinner size="xl" />
      </Flex>
    );

  // Funções paginação

  function next() {
    var x = pop[0] + 5;
    var y = pop[1] + 5;
    var array = [x, y];

    if (array[0] == 0) {
      setprevState(true);
    } else setprevState(false);

    setPop(array);
  }

  function prev() {
    var u = pop[0] - 5;
    var v = pop[1] - 5;
    var array = [u, v];

    if (array[0] == 0) {
      setprevState(true);
    } else if (array[0] == 5) {
      var a = v;
      var orroy = [0, v];
      setPop(orroy);
    } else setprevState(false);

    setPop(array);
  }

  // Função de filtragem para nome e idade

  function Filtered(user) {
    if (user.name.includes(searchName) | (user.age == searchName)) {
      return true;
    } else return false;
  }

  return (
    <Flex width="100%" padding="5" display="block" margin-bottom="10">
      <Heading as="h2" size="2xl" marginBottom={10}>
        Teste Paolo
      </Heading>

      <InputGroup>
        <InputLeftAddon children={<SearchIcon />} />
        <Input
          marginBottom="10"
          bgColor="gray.100"
          placeholder="Pesquisa por nome/idade :)"
          value={searchName}
          onChange={(ev) => {
            setSearchName(ev.target.value);
            setFoundName(true);
            setInicial(false);
          }}
        />
      </InputGroup>

      <TableContainer width="100%" bg="gray.100" padding="1rem 2rem">
        <Table variant="simple">
          <TableCaption>Usuários resgatados</TableCaption>

          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Idade</Th>
            </Tr>
          </Thead>

          <Tbody>
            {inicial &&
              usuarios.data.slice(pop[0], pop[1]).map((element, index) => (
                <Tr key={index}>
                  <Td>{element.name}</Td>
                  <Td>{element.age}</Td>
                </Tr>
              ))}

            {foundName &&
              usuarios.data
                .filter(Filtered)
                .slice(pop[0], pop[1])
                .map((element, index) => (
                  <Tr key={index}>
                    <Td>{element.name}</Td>
                    <Td>{element.age}</Td>
                  </Tr>
                ))}

            {/* Linha para paginação */}

            <Tr>
              <Td>
                <Flex justify="flex-start" padding-top="10">
                  <Button
                    colorScheme="teal"
                    onClick={prev}
                    isDisabled={prevState}
                  >
                    Anterior
                  </Button>
                </Flex>
              </Td>
              <Td>
                <Flex justify="flex-end" padding-top="10">
                  <Button
                    colorScheme="teal"
                    onClick={next}
                    isDisabled={nextState}
                  >
                    Próximo
                  </Button>
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}
