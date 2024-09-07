import { FaSheetPlastic } from "react-icons/fa6";

export default function DownloadResume() {
  const resumeURL = process.env.PUBLIC_URL + "/files/Gowtham V_Resume.pdf";
  return (
    <a href={resumeURL} download="Gowtham V_Resume.pdf">
      <button className="btn">
        RESUME <FaSheetPlastic style={{ margin: "2.5px" }} />
      </button>
    </a>
  );
}
