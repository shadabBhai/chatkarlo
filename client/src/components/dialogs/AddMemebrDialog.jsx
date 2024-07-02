import { Dialog, DialogTitle } from "@mui/material";
import React from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";

const AddMemebrDialog = ({addMemebr , isLoadingAddMember , chatId}) => {
  return <Dialog>
    <Stack>
        <DialogTitle open>
            Add Memebr
        </DialogTitle>
        <Stack spacing ={"1rem"}>
            {
                sampleUsers.map((user) =>(
                    <UserItem user={user} key={user._id} handler={addFriendHandler}/>
                )
            }

        </Stack>
    </Stack>
  </Dialog>;
};

export default AddMemebrDialog;
