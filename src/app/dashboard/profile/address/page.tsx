import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import React from "react";
import { HiLocationMarker, HiPhone } from "react-icons/hi";

type Props = {};

const AddressPage = (props: Props) => {
  return (
    <div className="flex flex-col gap-x-10 gap-y-5 lg:flex-row lg:items-center">
      <div className="profile-image">
        <HiLocationMarker className="text-black/100 text-6xl" />
      </div>
      <div className="space-y-5">
        <div>
          <h1 className="font-bold text-base">Address information</h1>
          <p className="text-black/100 text-sm">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <form action="" className="space-y-5">
          <div className="grid gap-5 lg:grid-cols-2 min-[1250px]:grid-cols-3">
            {/* Residential address 1 */}
            <div>
              <Label
                htmlFor="residential_address_1"
                text="Residential address 1"
              />
              <Input
                type="text"
                name="residential_address_1"
                defaultValue=""
              />
            </div>
            {/* Residential address 2 */}
            <div>
              <Label htmlFor="residential_address_2" text="Residential address 2" />
              <Input
                type="text"
                name="residential_address_2"
                defaultValue=""
              />
            </div>
            {/* Residential address 3 */}
            <div>
              <Label htmlFor="residential_address_3" text="Residential address 3" />
              <Input
                type="text"
                name="residential_address_3"
                defaultValue=""
              />
            </div>
            {/* Residential address 4 */}
            <div>
              <Label htmlFor="residential_address_4" text="Residential address 4" />
              <Input
                type="text"
                name="residential_address_4"
                defaultValue=""
              />
            </div>
            {/* Postal address 1 */}
            <div>
              <Label htmlFor="postal_address_1" text="Postal address 1" />
              <Input
                type="text"
                name="postal_address_1"
                defaultValue=""
              />
            </div>
            {/* Postal address 2 */}
            <div>
              <Label htmlFor="postal_address_2" text="Postal address 2" />
              <Input
                type="text"
                name="postal_address_2"
                defaultValue=""
              />
            </div>
            {/* Postal address 3 */}
            <div>
              <Label htmlFor="postal_address_3" text="Postal address 3" />
              <Input
                type="text"
                name="postal_address_3"
                defaultValue=""
              />
            </div>
            {/* Postal address 4 */}
            <div>
              <Label htmlFor="postal_address_4" text="Postal address 4" />
              <Input
                type="text"
                name="postal_address_4"
                defaultValue=""
              />
            </div>
           
           
          </div>
          <Button text="Save" className="btn-sm" />
        </form>
      </div>
    </div>
  );
};

export default AddressPage;
