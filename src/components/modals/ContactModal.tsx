
import React, {Dispatch, FC, SetStateAction} from 'react';
import MainButton from "@/components/shared/MainButton";
import {z} from "zod"
import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import ModalWindow from "@/components/shared/ModalWindow";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type TFormValues = z.infer<typeof formSchema>;

const initialState:TFormValues = {
  name: "",
  email: "",
  message: "",
};


interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ContactModal:FC<IProps> = (props) => {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({
    defaultValues: initialState,
    resolver: zodResolver(formSchema)
  });

  const submitForm = (data:TFormValues) => {
    console.log("submit", data)
    props.setIsOpen(false);
  }

  return (
    <>
      <ModalWindow title={"Contact Us"} {...props}>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="w-full border-gray-300 rounded mt-1 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="w-full border-gray-300 rounded mt-1 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Your Message"
              className="w-full border-gray-300 rounded mt-1 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>
          <MainButton>Submit</MainButton>
        </form>
      </ModalWindow>
    </>
  );
};

export default ContactModal;