import { useParams, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Topic() {
  let { topicId } = useParams();
  let query = useQuery();
  console.log(useLocation().search);
  console.log(query.get("name"));
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default Topic;
