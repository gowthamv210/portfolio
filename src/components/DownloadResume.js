export default function DownloadResume() {
  const resumeURL = process.env.PUBLIC_URL + "/files/resume.pdf";
  return (
    <a href={resumeURL} download="Gowtham V_Resume.pdf">
      <button className="btn">MY RESUME</button>
    </a>
  );
}
