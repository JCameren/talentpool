import { NotifWrapper } from "./styles";
import { MdClose } from 'react-icons/md'
import { Text } from "../../ui";
import { Container, Flex } from "../../ui";

const Notification = ({ status, message, unshowNotification }) => {
  return (
    <Container medium>
      <NotifWrapper status={status}>
        <Flex spaceBetween alCenter>
          <Text>{message}</Text>
          <Text>
            <MdClose onClick={unshowNotification}/>  
          </Text>
        </Flex>
      </NotifWrapper>
    </Container>
  );
};

export default Notification;
