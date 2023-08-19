import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Option from "@/components/Option";
import Select from "@/components/Select";
import React from "react";
import { HiCalendar, HiUser } from "react-icons/hi";

type Props = {};

const ProfilePage = (props: Props) => {
  return (
    <div className="flex flex-col gap-x-10 gap-y-5 lg:flex-row lg:items-center">
      <div className="profile-image">
        <HiUser className="text-black/100 text-6xl" />
      </div>
      <div className="space-y-5">
        <div>
          <h1 className="font-bold text-base">Personal information</h1>
          <p className="text-black/100 text-sm">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <form action="" className="space-y-5">
          <div className="grid gap-5 lg:grid-cols-2 min-[1250px]:grid-cols-3">
            {/* Title */}
            <div>
              <Label htmlFor="title" text="Title"/>
              <Select id="title" disabled value="mrs">
                <Option text="Mr" value="mr" />
                <Option text="Mrs" value="mrs" />
              </Select>
            </div>
            {/* First name */}
            <div>
              <Label htmlFor="first_name" text="First name" />
              <Input type="text" name="first_name" disabled defaultValue="Joan" />
            </div>
            {/* Other names */}
            <div>
              <Label htmlFor="other_names" text="Other names" />
              <Input type="text" name="other_names" disabled defaultValue="Doe" />
            </div>
            {/* Gender */}
            <div>
              <Label htmlFor="gender" text="Gender" />
              <Input type="text" name="gender" disabled defaultValue="Female" />
            </div>
            {/* Student ID */}
            <div>
              <Label htmlFor="student_id" text="Student ID" />
              <Input
                type="text"
                name="student_id"
                disabled
                defaultValue="206606431"
              />
            </div>
            {/* Birthday */}
            <div>
              <Label htmlFor="birthday" text="Birthday" />
              <Input type="date" name="birthday" disabled defaultValue="2023-08-18" icon={<HiCalendar />} />
            </div>
            {/* Country */}
            <div>
              <Label htmlFor="country" text="Country" />
              <Input type="text" name="country" disabled defaultValue="Ghana" />
            </div>
            {/* Region */}
            <div>
              <Label htmlFor="region" text="Region" />
              <Input type="text" name="region" disabled defaultValue="Bono East" />
            </div>
          </div>
          <Button text="Save" className="btn-sm" />
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
