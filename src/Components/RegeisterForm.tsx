import React, { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { CakeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function RegeisterForm() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();
  // start the sign up process.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId }).catch(
          () => "obligatory catch",
        );
        router.push("/").catch(() => "obligatory catch");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
  return (
    <>
      {!pendingVerification && (
        <div className="h-full w-1/2 space-y-14 rounded-r-2xl bg-white px-16 py-10  shadow-lg">
          <h2 className=" text-2xl font-semibold text-darkGray">
            Become a store member
          </h2>
          <form className=" space-y-10" onSubmit={handleSubmit}>
            <div className="formLabelDiv">
              <label className="fontLabel text-darkGray" htmlFor="email">
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
              <label className=" fontLabel text-darkGray">First name</label>
              <input className="input" type="text" />
            </div>
            <div className="formLabelDiv">
              <label className="fontLabel text-darkGray">Last name</label>
              <input className="input" type="text" />
            </div>
            <div className="formLabelDiv">
              <label className="fontLabel text-darkGray" htmlFor="password">
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
                Create account
              </button>
              <p className=" mt-6 text-center">
                Have an account?{" "}
                <Link href="/signin">
                  <span className=" text-[#9f6fc7] hover:cursor-pointer hover:text-[#62457a]">
                    Sign in
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      )}
      {pendingVerification && (
        <div className=" flex  w-1/2 flex-col items-center justify-center space-y-4 rounded-r-2xl bg-white px-16 py-10  shadow-lg">
          <div className="flex items-center">
            <h2 className=" text-2xl font-semibold">Welcome to the club</h2>
            <CakeIcon className="h-8 px-2" />
          </div>
          <form className=" space-x-2">
            <input
              className="input"
              value={code}
              placeholder="Code..."
              onChange={(e) => setCode(e.target.value)}
            />
            <button className="submitButton" onClick={onPressVerify}>
              Verify email
            </button>
          </form>
        </div>
      )}
    </>
  );
}
