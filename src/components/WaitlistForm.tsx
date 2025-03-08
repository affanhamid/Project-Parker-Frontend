"use client";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import React, { useState } from "react";

const WaitlistForm = ({ font }: { font: NextFont }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim() || !email.trim()) {
      setError("Please fill out all fields");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    const body = {
      name: fullName.trim(),
      email: email.trim(),
    };
    const url =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001/api/waitlist";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const res = await response.json();
    console.log(res);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col px-[16px] gap-[20px] tablet:w-[400px] pb-[50px]"
    >
      <Input
        placeholder="Full Name..."
        iconSource="User.svg"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        font={font}
      />
      <Input
        placeholder="Email Address..."
        iconSource="Email.svg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        font={font}
      />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <button
        type="submit"
        className="relative flex items-center text-[16px] md:text-[20px] gap-[-30] w-full justify-center h-[45px] rounded-[7px] px-[10px] tablet:px-[24px]"
      >
        <Image
          src="Button.svg"
          alt="Background"
          fill
          className="object-fit -z-10"
        />
        <span className={`flex-1 ${font.className}`}>Join the waitlist</span>
        <span>
          <Image
            src="Right.svg"
            alt="Right Arrow"
            width={30}
            height={30}
            className="object-cover aspect-square w-[20px]"
          />
        </span>
      </button>
    </form>
  );
};

const Input = ({
  placeholder,
  iconSource,
  value,
  onChange,
  font,
}: {
  placeholder: string;
  iconSource: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  font: NextFont;
}) => {
  return (
    <span
      className={`py-[10px] px-[5px] ${font.className} flex items-center gap-[10px] border border-white border-opacity-[2%] rounded-[10px]`}
    >
      <Image
        src={iconSource}
        alt="User Icon"
        width={30}
        height={30}
        className="object-cover aspect-sqaure w-[20px]"
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent placeholder-opacity-30 placeholder-white outline-none w-full mr-[20px] focus:bg-transparent active:bg-transparent"
      />
    </span>
  );
};

export default WaitlistForm;
