import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import React from "react";
import { HiStop } from "react-icons/hi";

type Props = {};

const ReligiousAffiliationPage = (props: Props) => {
  return (
    <div className="flex flex-col gap-x-10 gap-y-5 lg:flex-row lg:items-center">
      <div className="profile-image">
        <HiStop className="text-black/100 text-6xl" />
      </div>
      <div className="space-y-5">
        <div>
          <h1 className="font-bold text-base">Religious affiliation</h1>
          <p className="text-black/100 text-sm">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <form action="" className="space-y-5">
          <div className="grid gap-5 lg:grid-cols-2 min-[1250px]:grid-cols-3">
            {/* Religion*/}
            <div>
              <Label htmlFor="religion" text="Religion" />
              <Input type="text" name="religion" defaultValue="" />
            </div>
            {/* Religion */}
            <div>
              <Label htmlFor="denomination" text="Denomination/Group" />
              <Input type="text" name="denomination" defaultValue="" />
            </div>
          </div>
          <Button text="Save" className="btn-sm" />
        </form>
      </div>
    </div>
  );
};

export default ReligiousAffiliationPage;
