import ActorDetails from "@/components/ActorDetails/ActorDetails";
import TrendingPeople from "@/components/TrendingPeople/TrendingPeople";
import React from "react";

const ActorIdPage = async ({ params: { id, locale } }) => {
  return (
    <div>
      <ActorDetails actorId={id} locale={locale} />
      <TrendingPeople />
    </div>
  );
};

export default ActorIdPage;
