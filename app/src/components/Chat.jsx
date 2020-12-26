import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import QuestionerIcon from '../assets/images/robot_icon.png'
import AnswerIcon from '../assets/images/no_profile_icon.png'

const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? '.p-chat__row' : 'p-chat__reverse';
    
    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src={QuestionerIcon} />
                ) : (
                    <Avatar alt="icon" src={AnswerIcon} />
                )
            }
            </ListItemAvatar>
            <div class="p-chat__bubble">
                {props.text}
            </div>
        </ListItem>
    );
}

export default Chat