import { getMovieByPath } from "@/utils/movieClient";

export async function GET(request, locale) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const searchResults = await getMovieByPath(
    "/search/movie",
    [
      {
        key: "query",
        value: query,
      },
    ],
    locale
  );

  return new Response(JSON.stringify(searchResults), { status: 200 });
}
