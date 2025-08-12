import { useInfiniteQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import { type FetchResponse } from "../services/api-client";
import type { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";

// Consider moving this to a separate types file
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam ?? 1,
        },
      }),
    initialPageParam: 1,
    staleTime: 10 * 1000,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    enabled: !!gameQuery,
  });

export default useGames;
