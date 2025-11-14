import Button from "../components/Button.jsx";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import "../App.css";
import "react-phone-input-2/lib/style.css";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://urzbfehdzberfqlaeukl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyemJmZWhkemJlcmZxbGFldWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5NzE4ODcsImV4cCI6MjA3NjU0Nzg4N30.4MQSA2LDsoV1GHjQe7YI7-ni8xG5mf3v2S901WECvYo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function UpdatesPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  async function submit(e) {
    e.preventDefault();
    console.log(email);
    console.log(phone);
    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ email_address: email.trim(), phone_number: phone.trim() }]);
  }

  return (
    <section
      className={
        "h-dvh flex justify-center items-center px-[1.5em] bg-[#F4F4F4]"
      }
    >
      <form
        className={"bg-white p-[1.4em] flex flex-col gap-[1.4em] form_parent "}
      >
        <div>
          <h2 className={"text-[1.8rem] font-semibold"}>Join Now</h2>
          <p className={"text-[#8F8F8F] italic"}>
            Get early access and stay updated on the latest features.
          </p>
        </div>
        <div className={"flex flex-col gap-[1.1em]"}>
          <div>
            <p>Email Address</p>
            <input onChange={(e) => changeEmail(e)} />
          </div>
          <div>
            <p>Phone Number</p>
            <PhoneInput country={"us"} value={phone} onChange={setPhone} />
          </div>
        </div>

        <div>
          <button onClick={(e) => submit(e)}>Submit</button>
        </div>
      </form>
    </section>
  );
}
