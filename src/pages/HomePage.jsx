import { Fab, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import Wrapper from "../components/Wrapper";
import { Plus } from "phosphor-react";
import { useTodo } from "../Context/TodoContext";
import TaskModal from "../components/TaskModal";
import TodoItem from "../components/TodoItem";

const HomePage = () => {
  const { todos, handleOpen } = useTodo();
  return (
    <Wrapper>
      <Stack
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
        spacing={2}
      >
        {/* Heading  */}
        <Typography variant="h4" fontFamily={"PT serif"}>
          TODO-LIST
        </Typography>
        <Typography variant="h6" fontFamily={"PT serif"}>
          {`Welcome { User }`}
        </Typography>
        {/* Filters  */}
        {/* List  */}
        <Stack
          spacing={2}
          minWidth={{ xs: "100%", md: "75%", lg: "50%" }}
          sx={{ backgroundColor: "#ecedf6" }}
          p={2}
        >
          {todos.length > 0 ? (
            todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          ) : (
            <Typography variant="subtitle2" color="grey" textAlign={"center"}>
              No Todos...
            </Typography>
          )}
        </Stack>

        {/* FAB  */}
        <Tooltip arrow placement="left" title="Add Task">
          <Fab
            color="primary"
            aria-label="add"
            sx={{ position: "fixed", bottom: 50, right: 50 }}
            onClick={() => handleOpen()}
          >
            <Plus size={"24px"} />
          </Fab>
        </Tooltip>

        {/* Modal  */}
        <TaskModal />
      </Stack>
    </Wrapper>
  );
};

export default HomePage;
