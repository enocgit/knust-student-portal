import {
  HiAdjustments,
  HiCash,
  HiClipboardCheck,
  HiClipboardCopy,
  HiDesktopComputer,
  HiDocumentRemove,
  HiFingerPrint,
  HiPencilAlt,
  HiUser,
  HiUserCircle,
  HiUserRemove,
} from "react-icons/hi";

const activity = [
  {
    id: 1,
    name: "Profile",
    icon: <HiUser className="text-white text-2xl" />,
    iconBackground: "#680088",
  },
  {
    id: 2,
    name: "Course Registration",
    icon: <HiPencilAlt className="text-white text-2xl" />,
    iconBackground: "#27CAD1",
  },
  {
    id: 3,
    name: "Option Change",
    icon: <HiAdjustments className="text-white text-2xl" />,
    iconBackground: "#50D361",
  },
  {
    id: 4,
    name: "Registration Slip",
    icon: <HiDocumentRemove className="text-white text-2xl" />,
    iconBackground: "#EED915",
  },
  {
    id: 5,
    name: "Check Result",
    icon: <HiClipboardCheck className="text-white text-2xl" />,
    iconBackground: "#5E00EB",
  },
  {
    id: 6,
    name: "Assess Lecturer",
    icon: <HiUserCircle className="text-white text-2xl" />,
    iconBackground: "#987244",
  },
  {
    id: 7,
    name: "Bill and Payment",
    icon: <HiCash className="text-white text-2xl" />,
    iconBackground: "#FF0638",
  },
  {
    id: 8,
    name: "Biometric Verification",
    icon: <HiFingerPrint className="text-white text-2xl" />,
    iconBackground: "#987244",
  },
  {
    id: 9,
    name: "Graduation",
    icon: <HiUserRemove className="text-white text-2xl" />,
    iconBackground: "#727286",
  },
  {
    id: 10,
    name: "Transcript Request",
    icon: <HiClipboardCopy className="text-white text-2xl" />,
    iconBackground: "#6CB671",
  },
  {
    id: 11,
    name: "Virtual Classroom",
    icon: <HiDesktopComputer className="text-white text-2xl" />,
    iconBackground: "#727286",
  },
];

export default activity;
