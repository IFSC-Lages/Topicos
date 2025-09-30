import type { FC } from "react";
import { useParams, useSearchParams } from "react-router";

const User: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [search] = useSearchParams();
  const tab = search.get("tab") ?? "overview";
  return (
    <div style={{marginTop:'20px'}}>
      User {id} | Tab: {tab}
    </div>
  );
};

export default User;
