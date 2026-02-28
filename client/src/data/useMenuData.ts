import { useEffect, useMemo, useState } from "react";
import { menuData as fallbackMenuData } from "@/data/menu";

export type MenuCategory = typeof fallbackMenuData[number];
export type MenuDataPayload = { menuData: MenuCategory[] };

export function useMenuData() {
  const [payload, setPayload] = useState<MenuDataPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetch("/menu.json", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: MenuDataPayload) => {
        if (!alive) return;
        setPayload(data);
        setLoading(false);
      })
      .catch(() => {
        if (!alive) return;
        // fallback to bundled data if fetch fails
        setPayload({ menuData: fallbackMenuData });
        setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  const menuData = useMemo(() => payload?.menuData ?? fallbackMenuData, [payload]);

  return { menuData, loading };
}
