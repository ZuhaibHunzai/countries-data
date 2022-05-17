import "./servicesHeader.css";
export const ServicesHeader = ({ children, type }) => {
  return (
    <h1 className="servicesHeader" type={type}>
      {children}
    </h1>
  );
};
