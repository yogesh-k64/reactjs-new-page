import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import classes from "./ChatBox.module.css"
import {BsFillChatLeftDotsFill} from 'react-icons/fa';

const ChatBox = () => {
  return (
    
      <div className={classes['chat-box']}>
      
        <OverlayTrigger
            trigger="click"
          //   key='left'
            placement='left'
          overlay={
            <Popover id={`popover-positioned-left`}>
              <Popover.Header as="h3">support <Button variant="secondary">contact</Button> </Popover.Header>
              <Popover.Body>
                <strong>Holy guacamole!</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button>{BsFillChatLeftDotsFill}</Button>
        </OverlayTrigger>
      </div>
    
  );
};

export default ChatBox;
