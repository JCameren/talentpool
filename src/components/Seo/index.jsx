import { Helmet } from "react-helmet"

const Seo = ({ title, description }) => {
  return (
    <Helmet>
      <title>{`${title} | Talentpool`}</title>
      <meta  name="description" content={description} />
    </Helmet>
  )
}

export default Seo