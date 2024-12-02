import { useToDo } from "@/context/ToDoContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { z } from "zod";


export function AddToDo() {
  const todoSchema = z.object({
    title: z.string().min(4, { message: "To Do must have title" }),
    desc: z.string().min(4, { message: "Must have little description" }),
  });
  const { addToDo, todos } = useToDo();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const isValidated = todoSchema.safeParse({ title, desc }).success;

  const handleToDo = () => {
    if (isValidated) {
      if (todos.length != 0) {
        const lastId = todos[todos.length - 1].id;
        addToDo({
          id: lastId + 1,
          title,
          desc,
          isCompleted: false,
        });
        setDesc("");
        setTitle("");
      } else {
        addToDo({ id: 1, title, desc, isCompleted: false });
        setDesc("");
        setTitle("");
      }
    }
  };
  return (
    <>
      <h1 className="font-bold text-xl my-4">Add To Do</h1>
      <label htmlFor="title">
        Title
        <Input
          placeholder="Title"
          className="my-2"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="desc">
        Description
        <Textarea
          placeholder="Describe your to-do"
          className="my-3"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </label>
      <Button type="submit" color="primary"  onClick={handleToDo} disabled={!isValidated}>
        Add To Do
      </Button>
     
      
    </>
  );
}
