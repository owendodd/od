import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
        query MyQuery {
            allFile {
                nodes {
                    name
                }
            }
        }
    `
  )
  return site.siteMetadata
}