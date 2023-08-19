import {
  HiOutlineAdjustments,
  HiOutlineCash,
  HiOutlineClipboardCheck,
  HiOutlineClipboardCopy,
  HiOutlineDesktopComputer,
  HiOutlineDocumentRemove,
  HiOutlineFingerPrint,
  HiOutlinePencilAlt,
  HiOutlineUser,
  HiOutlineUserCircle,
  HiOutlineUserRemove,
} from "react-icons/hi";

const activitiesOutline = [
  {
    id: 1,
    name: "Profile",
    path: "/dashboard/profile/personal",
    icon: <HiOutlineUser className="mr-2" />,
  },
  {
    id: 2,
    name: "Course Registration",
    path: "/dashboard/course-registration",
    icon: <HiOutlinePencilAlt className="mr-2" />,
  },
  {
    id: 3,
    name: "Option Change",
    path: "/dashboard/option-change",
    icon: <HiOutlineAdjustments className="mr-2" />,
  },
  {
    id: 4,
    name: "Registration Slip",
    path: "/dashboard/registration-slip",
    icon: <HiOutlineDocumentRemove className="mr-2" />,
  },
  {
    id: 5,
    name: "Check Result",
    path: "/dashboard/check-result",
    icon: <HiOutlineClipboardCheck className="mr-2" />,
  },
  {
    id: 6,
    name: "Assess Lecturer",
    path: "/dashboard/assess-lecturer",
    icon: <HiOutlineUserCircle className="mr-2" />,
  },
  {
    id: 7,
    name: "Bill and Payment",
    path: "/dashboard/bill-and-payment",
    icon: <HiOutlineCash className="mr-2" />,
  },
  {
    id: 8,
    name: "Biometric Verification",
    path: "/dashboard/biometric-verification",
    icon: <HiOutlineFingerPrint className="mr-2" />,
  },
  {
    id: 9,
    name: "Graduation",
    path: "/dashboard/graduation",
    icon: <HiOutlineUserRemove className="mr-2" />,
  },
  {
    id: 10,
    name: "Transcript Request",
    path: "/dashboard/transcript-request",
    icon: <HiOutlineClipboardCopy className="mr-2" />,
  },
  {
    id: 11,
    name: "Virtual Classroom",
    path: "/dashboard/virtual-classroom",
    icon: <HiOutlineDesktopComputer className="mr-2" />,
  },
];

export default activitiesOutline;
