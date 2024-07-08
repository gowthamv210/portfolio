export default function Footer() {
  const currYear = new Date();
  return (
    <div className="footer">
      <p>
        Copyrights ©{" "}
        <span styles={{ color: "#88ce52" }}>{currYear.getFullYear()}</span>
      </p>
    </div>
  );
}
