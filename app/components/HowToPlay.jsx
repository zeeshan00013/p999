import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";

const HowToPlay = () => {
  const sections = [
    {
      title: "P999 Game Download and Installation for Android",
      steps: [
        "Open your mobile browser and search for the app.",
        "Look for the download link for the Android app.",
        "Tap on the link to start downloading the APK file.",
        "Once downloaded, go to your phone settings and enable 'Install from Unknown Sources.'",
        "Locate the file in your downloads folder.",
        "Tap on it and begin installation.",
        "Wait for the process to complete, then open the app.",
        "Sign in or register to start playing instantly.",
      ],
    },
    {
      title: "P999 Game Account Creation Steps",
      steps: [
        "Open the app after downloading it on your Android or iOS device.",
        "Tap on the 'Register' or 'Sign Up' button on the home screen.",
        "Enter your basic details like name, email, or mobile number.",
        "Create a strong password to keep your account secure.",
        "Agree to the terms and conditions and tap continue.",
        "Verify your account through SMS or email confirmation.",
        "Once verified, your account will be active, and you can start playing immediately.",
      ],
    },
    {
      title: "P999 Game Login Guide",
      steps: [
        "Open the app on your device.",
        "Tap on the 'Login' option.",
        "Enter your registered email or phone number.",
        "Type in your password carefully.",
        "If needed, use the 'Forgot Password' option to reset.",
        "Click on the 'Submit' button.",
        "You will be logged in and redirected to the home screen.",
      ],
    },
  ];
  return (
    <div className="text-white p-6 rounded-lg max-w-6xl w-full mx-auto">
      {sections.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-xl font-bold text-green-600 mb-4">
            {section.title}
          </h2>
          <ol className="list-decimal list-inside space-y-2 pl-2">
            {section.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default HowToPlay;
