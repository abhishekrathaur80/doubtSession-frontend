import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getalltutors } from "../redux/details/action";

import { getAllDoubts } from "../redux/doubts/action";
import Loader from "../components/Loader";

const Dashboard = () => {
  const username = localStorage.getItem("login-name") || "";
  const token = localStorage.getItem("doubt-token") || "";
  const dispatch = useDispatch();
  const { alltutors, isLoading } = useSelector((store) => store.detailsReducer);
  const { alldoubts } = useSelector((store) => store.doubtReducer);
  useEffect(() => {
    dispatch(getalltutors(token));
  }, []);

  useEffect(() => {
    dispatch(getAllDoubts(token));
  }, []);

  if (isLoading) {
    return (
      <Box display={"flex"} justifyContent={"center"} mt="100px">
        <Loader />
      </Box>
    );
  }

  return (
    <Box>
      <Heading m="20px" as="h3" size="md">{`Welcome ${username}`}</Heading>

      <Box m="20px" color="rgb(255, 179, 0)">
        <HStack>
          <Heading as="h2" size="md">
            {alldoubts[0]?.question}
          </Heading>
          <Button _hover={"none"} variant={"solid"} bg="green" color="white">
            Accept
          </Button>
        </HStack>
      </Box>

      <Box mt="60px" w="90%" m="auto">
        <Text>All Tutors</Text>
        <TableContainer>
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Language</Th>
                <Th>subjectExpertise</Th>
                <Th>Class Grade</Th>
              </Tr>
            </Thead>
            <Tbody>
              {alltutors?.map((tutor) => {
                return (
                  <Tr key={tutor._id}>
                    <Td>{tutor.name ? tutor.name : "Mohan"}</Td>
                    <Td>{tutor.language ? tutor.language : "English"}</Td>
                    <Td>
                      {tutor.subjectExpertise ? tutor.subjectExpertise : "Math"}
                    </Td>
                    <Td>{tutor.classGrade ? tutor.classGrade : "12"}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
