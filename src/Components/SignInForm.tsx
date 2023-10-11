import React, { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // start the sign In process.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId }).catch(
          () => "obligatory catch",
        );
        router.push("/").catch(() => "obligatory catch");
      } else {
        /*Investigate why the login hasn't completed */
        console.log(result);
      }
    } catch (err: unknown) {
      console.error("error", err);
    }
  };
  return (
    <div className="h-full w-full space-y-14 rounded-2xl bg-white px-16 py-10  shadow-lg">
      <h2 className=" text-center text-2xl font-semibold">
        Sign in to your account
      </h2>

      <form className=" space-y-8" onSubmit={handleSubmit}>
        <div className="formLabelDiv">
          <label className="fontLabel" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            id="email"
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>

        <div className="formLabelDiv">
          <label className="fontLabel" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="formLabelDiv">
          <button className=" submitButton" onClick={handleSubmit}>
            Sign in
          </button>
          <p className=" mt-6 text-center">
            Do not have an account?{" "}
            <Link href="/register">
              <span className=" hover: cursor-pointer text-[#9f6fc7] hover:text-[#62457a]">
                Sign up
              </span>
            </Link>
          </p>
          <div></div>
        </div>
      </form>
    </div>
  );
}
