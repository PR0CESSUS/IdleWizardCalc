import { useRoute, useRouter } from "vue-router/auto";

export function useRouteChildren(withDefault: boolean = false) {
  const router = useRouter();
  const routes = router.getRoutes();
  const currentRoute = useRoute();
  const firstPass = routes.filter((route) => route.path == currentRoute.path);
  const secondPass = firstPass.filter((route) => route.children.length);
  const children = secondPass[0].children;
  if (withDefault) return children;

  return children.filter((route) => !route.meta?.default);
}
