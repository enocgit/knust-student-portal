import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Option from "@/components/Option";
import Select from "@/components/Select";
import React from "react";
import { HiCalendar, HiPhone } from "react-icons/hi";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <div className="flex flex-col gap-x-10 gap-y-5 lg:flex-row lg:items-center">
      <div className="profile-image">
        <HiPhone className="text-black/100 text-6xl" />
      </div>
      <div className="space-y-5">
        <div>
          <h1 className="font-bold text-base">Contact information</h1>
          <p className="text-black/100 text-sm">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <form action="" className="space-y-5">
          <div className="grid gap-5 lg:grid-cols-2 min-[1250px]:grid-cols-3">
            {/* School email address */}
            <div>
              <Label
                htmlFor="school_email_address"
                text="School email address"
              />
              <Input
                type="email"
                name="school_email_address"
                disabled
                defaultValue="joandoe23@knust.edu.gh"
              />
            </div>
            {/* Other email address */}
            <div>
              <Label htmlFor="other_email_address" text="Other email address" />
              <Input
                type="email"
                name="other_email_address"
                defaultValue="joan@yahoo.com"
              />
            </div>
            {/* Primary phone number */}
            <div>
              <Label
                htmlFor="primary_phone_number"
                text="Primary phone number"
              />
              <Input
                type="text"
                name="primary_phone_number"
                disabled
                defaultValue="0550873711"
              />
            </div>
            {/* Other phone number */}
            <div>
              <Label htmlFor="other_phone_number" text="Other phone number" />
              <Input
                type="text"
                name="other_phone_number"
                defaultValue="0232111132"
              />
            </div>
          </div>
          <Button text="Save" className="btn-sm" />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
