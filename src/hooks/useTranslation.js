import { useQuery } from "@tanstack/react-query";
import { translateText } from "./../services/translationServices";

export function useTranslation(text, targetLanguage) {
  return useQuery({
    queryKey: ["translation", text, targetLanguage],
    queryFn: () => translateText(text, targetLanguage),
    enabled: !!text && !!targetLanguage,
    retry: 1,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
}
