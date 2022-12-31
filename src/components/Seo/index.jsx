import { Helmet, HelmetProvider } from "react-helmet-async";

const Seo = ({ title, description }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${title} | Talentpool`}</title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};

export default Seo;
