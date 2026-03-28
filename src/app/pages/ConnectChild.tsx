import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function ConnectChild() {

  const [childEmail, setChildEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [message, setMessage] = useState("");
  const [connected, setConnected] = useState(false);

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSendOTP = () => {

    if (!childEmail.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }

    const otp = generateOTP();
    setGeneratedOtp(otp);

    const connectionData = {
      childEmail,
      otp,
      verified: false
    };

    localStorage.setItem(
      "childConnection",
      JSON.stringify(connectionData)
    );

    setOtpSent(true);
    setMessage("Demo OTP generated.");
  };

  const handleVerifyOTP = () => {

    const stored = localStorage.getItem("childConnection");

    if (!stored) return;

    const data = JSON.parse(stored);

    if (otpInput === data.otp) {

      data.verified = true;

      localStorage.setItem(
        "childConnection",
        JSON.stringify(data)
      );

      const children = JSON.parse(
        localStorage.getItem("parentChildren") || "[]"
      );

      // Prevent duplicate children
      if (!children.includes(data.childEmail)) {
        children.push(data.childEmail);
      }

      localStorage.setItem(
        "parentChildren",
        JSON.stringify(children)
      );

      setConnected(true);
      setMessage("Child connected successfully!");

    } else {
      setMessage("Incorrect OTP. Try again.");
    }

  };

  return (

    <div className="min-h-screen flex justify-center items-start pt-16 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6">

      <Card className="p-8 max-w-lg w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Connect Your Child
        </h1>

        <p className="text-gray-600 mb-6">
          Enter your child's email to generate a demo OTP.
        </p>

        {!otpSent && !connected && (

          <>
            <input
              type="email"
              placeholder="child@email.com"
              value={childEmail}
              onChange={(e) => setChildEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />

            <Button className="w-full" onClick={handleSendOTP}>
              Send OTP
            </Button>
          </>

        )}

        {otpSent && !connected && (

          <>
            <p className="text-sm text-gray-600 mb-3">
              Enter OTP for <strong>{childEmail}</strong>
            </p>

            <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-3 rounded-lg text-center mb-4">
              Demo OTP: <strong>{generatedOtp}</strong>
            </div>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />

            <Button className="w-full" onClick={handleVerifyOTP}>
              Verify OTP
            </Button>

          </>

        )}

        {connected && (

          <div className="text-green-600 font-semibold text-center mt-4">
            Child connected successfully!
          </div>

        )}

        {message && (

          <p className="text-sm text-purple-600 mt-4 text-center">
            {message}
          </p>

        )}

      </Card>

    </div>

  );

}