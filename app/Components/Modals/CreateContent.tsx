"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Button from "../Button/Button";
import { add, plus } from "@/app/utils/Icons";

function CreateContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [checkout, setCheckout] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

  const { theme, allTasks, closeModal } = useGlobalState();

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "checkout":
        setCheckout(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const task = {
      title,
      description,
      date,
      checkout,
      completed,
      important,
    };

    try {
      const res = await axios.post("/api/tasks", task);

      if (res.data.error) {
        toast.error(res.data.error);
      }

      if (!res.data.error) {
        toast.success("Creado con éxito!");
        allTasks();
        closeModal();
      }
    } catch (error) {
      toast.error("Algo salió mal");
      console.log(error);
    }
  };

  return (
    <CreateContentStyled onSubmit={handleSubmit} theme={theme}>
      <h1>Crear una habitación</h1>
      <div className="input-control">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={handleChange("title")}
          placeholder="Habitación (nro)"
        />
      </div>
      <div className="input-control">
        <label htmlFor="description">Descripcion</label>
        <textarea
          value={description}
          onChange={handleChange("description")}
          name="description"
          id="description"
          rows={4}
          placeholder="Descripción de la reserva"
        ></textarea>
      </div>
      <div className="input-control">
        <label htmlFor="date">Check-In</label>
        <input
          value={date}
          onChange={handleChange("date")}
          type="date"
          name="date"
          id="date"
        />
      </div>
      <div className="input-control">
        <label htmlFor="checkout">Check-Out</label>
        <input
          value={checkout}
          onChange={handleChange("checkout")}
          type="date"
          name="checkout"
          id="checkout"
        />
      </div>
      <div className="input-control toggler">
        <label htmlFor="completed">¿Está desocupada?</label>
        <input
          value={completed.toString()}
          onChange={handleChange("completed")}
          type="checkbox"
          name="completed"
          id="completed"
        />
      </div>
      <div className="input-control toggler">
        <label htmlFor="important">Desayuno</label>
        <input
          value={important.toString()}
          onChange={handleChange("important")}
          type="checkbox"
          name="important"
          id="important"
        />
      </div>

      <div className="submit-btn flex justify-end">
        <Button
          type="submit"
          name="Crear reserva"
          icon={add}
          padding={"0.8rem 2rem"}
          borderRad={"0.8rem"}
          fw={"500"}
          fs={"1.2rem"}
          background={"rgb(0, 163, 255)"}
        />
      </div>
    </CreateContentStyled>
  );
}


const CreateContentStyled = styled.form`
  > h1 {
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    font-weight: 600;
  }

  color: black;

  input[type="date"]::-webkit-calendar-picker-indicator {
    background-color: whitesmoke;
    border-radius: 30%;
    padding: 4px;
  }

  .input-control {
    position: relative;
    margin: 1.6rem 0;
    font-weight: 500;

    label {
      margin-bottom: 0.5rem;
      display: inline-block;
      font-size: clamp(0.9rem, 5vw, 1.2rem);

      span {
        color: black;
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      resize: none;
      background-color: whitesmoke;
      color: black;
      border-radius: 0.5rem;
    }
  }

  .submit-btn button {
    transition: all 0.35s ease-in-out;

    i {
      color: ${(props) => props.theme.colorGrey0};
    }
  }

  .toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    label {
      flex: 1;
    }

    input {
      width: initial;
    }
  }

  @media screen and (max-width: 450px) {
    .input-control {
      margin: 0;
    }

    .submit-btn button {
      font-size: 0.9rem !important;
      padding: 0.6rem 1rem !important;

      i {
        font-size: 1.2rem !important;
        margin-right: 0.5rem !important;
      }
    }
  }
`;

export default CreateContent;

