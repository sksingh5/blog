/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import HomepageComponent from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage"

const Homepage = () => {
  const data = useStaticQuery(graphql`
    query HomepageQuery {
      allPost(sort: { fields: date, order: DESC }, limit: 5) {
        nodes {
          slug
          title
          date(formatString: "YYYY-MM-DD")
          excerpt
          timeToRead
          description
          tags {
            name
            slug
          }
        }
      }
    }
  `)

  return (
   <HomepageComponent posts={data.allPost.nodes} />
  )
}

export default Homepage




