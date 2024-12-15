import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setContactData } from "../../slices/contactSlice";
import { apiConnector } from "../../service/apiConnector";
import { contactusEndpoint } from "../../service/api";
import { useNavigate } from "react-router-dom";

export const ContactSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(setContactData(data));

    const toastId = toast.loading("Sending your message...");
    try {
      const response = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data,
        {
          "Content-Type": "application/json",
        }
      );

      dispatch(setContactData(response.data.success));

      if (response.data.success) {
        navigate("/message-sent/success");
        toast.success(response.data.message, { id: toastId });
        reset();
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong", {
        id: toastId,
      });
      console.error(error);
    }
  };

  return (
    <>
      <section className="py-20 bg-[#0080C0] min-h-screen" id="contact">
        <h2 className="text-4xl font-semibold  text-center text-white">
          Contact Us
        </h2>

        <div className="max-w-2xl mx-auto w-11/12 mt-10 rounded-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 font-montserrat"
          >
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="firstName" className="text-white">
                  First Name
                  <sup className="text-red-500 text-[16px] brightness-95">
                    *
                  </sup>
                </label>
                <input
                  type="text"
                  name="first=Name"
                  id="firstName"
                  {...register("firstName", {
                    required: "First Name is required",
                    minLength: {
                      value: 3,
                      message: "First Name must be at least 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "First Name must not exceed 20 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "First Name must contain only alphabets",
                    },
                  })}
                  placeholder="First Name"
                  className="border-2 border-gray-200 rounded-lg p-2 focus:outline-none"
                />
                {errors.firstName && (
                  <span className="text-red-800 brightness-95 text-[13px]">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="lastName" className="text-white">
                  Last Name
                  <sup className="text-red-500 text-[16px] brightness-95">
                    *
                  </sup>
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  {...register("lastName", {
                    required: "Last Name is required",
                    minLength: {
                      value: 3,
                      message: "Last Name must be at least 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Last Name must not exceed 20 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Last Name must contain only alphabets",
                    },
                  })}
                  placeholder="Last Name"
                  className="border-2 border-gray-200 rounded-lg p-2 focus:outline-none"
                />
                {errors.lastName && (
                  <span className="text-red-800 brightness-95 text-[13px]">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-white">
                Your Email
                <sup className="text-red-500 text-[16px] brightness-95">*</sup>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: "Invalid Email",
                  },
                })}
                placeholder="name@example.com"
                className="border-2 border-gray-200 rounded-lg p-2 focus:outline-none"
              />
              {errors.email && (
                <span className="text-red-800 brightness-95 text-[13px]">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="text-white">
                Your Subject
                <sup className="text-red-500 text-[16px] brightness-95">*</sup>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                {...register("subject", {
                  required: "Subject is required",
                  minLength: {
                    value: 5,
                    message: "Subject must be at least 5 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Subject must not exceed 50 characters",
                  },
                })}
                placeholder="Let us know how we can help you"
                className="border-2 border-gray-200 rounded-lg p-2 w-full focus:outline-none"
              />
              {errors.subject && (
                <span className="text-red-800 brightness-95 text-[13px]">
                  {errors.subject.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-white">
                Your Message
                <sup className="text-red-500 text-[16px] brightness-95">*</sup>
              </label>
              <textarea
                name="message"
                id="message"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 20,
                    message: "Message must be at least 20 characters",
                  },
                  maxLength: {
                    value: 500,
                    message: "Message must not exceed 500 characters",
                  },
                })}
                placeholder="Your Message"
                className="border-2 border-gray-200 rounded-lg p-2 w-full min-h-24 focus:outline-none"
              ></textarea>
              {errors.message && (
                <span className="text-red-800 brightness-95 text-[13px]">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="border-white border-2 text-white py-3 rounded-md text-base w-fit px-7 uppercase mt-3 hover:border-blue-900 hover:brightness-95 hover:shadow-sm hover:shadow-slate-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
