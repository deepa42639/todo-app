import { useToDo } from "@/context/ToDoContext";
import { Button } from "./ui/button";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { z } from "zod";
type ToDosProps = {
  id: number;
  title: string;
  desc: string;
  isCompleted: boolean;
};

export function ListToDo() {
  const { todos } = useToDo();
  return (
    <>
      <h1 className="font-bold m-4">
        {todos.length != 0 ? "Your TO DOs" : ""}
      </h1>
      {todos.map((item) => (
        <ToDos
          key={item.id}
          id={item.id}
          title={item.title}
          desc={item.desc}
          isCompleted={item.isCompleted}
        />
      ))}
    </>
  );
}

function ToDos({ id, title, desc, isCompleted }: ToDosProps) {
  const { markAsDone } = useToDo();
  return (
    <Card className={`m-6 shadow-lg hover:shadow-xl`}>
      <CardHeader>
        <CardTitle className="text-lg">{`${title}`}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardFooter>
        {isCompleted ? (
          <div className="grid gap-3 grid-flow-row md:grid-flow-col" style={{alignItems:"center"}}>
            <span className="text-green-500 font-bold text-sm">
              ✓ Completed
            </span>
            <ConfirmDelete id={id} />
          </div>
        ) : (
          <div className="grid grid-flow-row gap-2 md:grid-flow-col">
            <ConfirmDelete id={id} />
            <EditToDo id={id} />
            <Button
                color="secondary"
              onClick={() => markAsDone(id)}
            >
              Mark as Completed
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

type ConfirmDeleteProps = {
  id: number;
};

function ConfirmDelete({ id }: ConfirmDeleteProps) {
  const { delToDo } = useToDo();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button color="primary">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            todo.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => delToDo(id)}
            className="bg-red-600 hover:bg-red-500  "
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function EditToDo({ id }: ConfirmDeleteProps) {
  const { todos, editToDo } = useToDo();
  const toDoToEdit = todos.find((todo) => {
    if (todo.id == id) {
      return todo;
    }
  });

  const todoSchema = z.object({
    title: z.string().min(4, { message: "To Do must have title" }),
    desc: z.string().min(4, { message: "Must have little description" }),
  });
  const [newTitle, setNewTitle] = useState(toDoToEdit?.title || "");
  const [newDesc, setNewDesc] = useState(toDoToEdit?.desc || "");

  const updatedTodo = {
    id: id,
    title: newTitle,
    desc: newDesc,
    isCompleted: false,
  };

  const isValidated = todoSchema.safeParse({
    title: updatedTodo.title,
    desc: updatedTodo.desc,
  }).success;
  const handleSave = (updatedTodo: ToDosProps) => {
    if (isValidated) {
      editToDo(updatedTodo);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Edit</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit TODO </AlertDialogTitle>
          {toDoToEdit && (
            <AlertDialogDescription key={id}>
              <label htmlFor="title">
                New Title
                <Input
                  placeholder="Title"
                  className="my-2"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </label>
              <label htmlFor="desc">
                New Description
                <Textarea
                  placeholder="Describe your to-do"
                  className="my-3"
                  id="desc"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                />
              </label>
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="bg-green-600 hover:bg-green-500 text-white hover:text-white"
            onClick={() => handleSave(updatedTodo)}
            disabled={!isValidated}
          >
            Save
          </AlertDialogCancel>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
