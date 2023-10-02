import { getServerSession } from "next-auth";
import React, { useEffect, useState } from "react";

const useCurrentMovieLikes = () => {
  const [movieLikes, setMovieLikes] = useState();
  const [session, setSession] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getServerSession();
      setSession(result);
      //   if (session != null) {
      //     const { movieLikes } = await prisma.user.findFirst({
      //       where: { email: user.email },
      //       include: {
      //         movieLikes: true,
      //       },
      //     });
      //     setMovieLikes(movieLikes);
      //   }
    };
    fetchData();
  }, []);

  return movieLikes;
};

export default useCurrentMovieLikes;
