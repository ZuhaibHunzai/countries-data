import "./servicesHeader.css";
export const ServicesBody = ({ children, servicesBody, type, src, alt }) => {
  return (
    <div className="servicesBodyMain">
      <div className="servicesImgDiv">
        <img className="servicesBodyImg" type={type} src={src} alt={alt}></img>
      </div>
      <div className="servicesBodyTextDiv">
        <div>
          <h2 className="servicesBodyTextH">{children}</h2>
        </div>
        <div>
          <p className="servicesbodyTextP">{children}</p>
        </div>
      </div>
    </div>
  );
};
