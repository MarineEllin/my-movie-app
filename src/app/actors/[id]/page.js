import ActorDetails from "@/components/ActorDetails/ActorDetails";
import TrendingPeople from "@/components/TrendingPeople/TrendingPeople";
import React from "react";

const ActorIdPage = async ({ params }) => {
  return (
    <div>
      <ActorDetails actorId={params.id} />
      <TrendingPeople />
    </div>
  );
};

export default ActorIdPage;
