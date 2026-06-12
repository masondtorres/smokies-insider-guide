"use client";

import { useMemo, useSyncExternalStore } from "react";
import { PLAN_STORAGE_KEY } from "@/lib/plan";

const CHANGE_EVENT = "smokies-plan-change";

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return localStorage.getItem(PLAN_STORAGE_KEY) || "[]";
}

function getServerSnapshot() {
  return "[]";
}

export function usePlanIds() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return useMemo(() => {
    try {
      const value: unknown = JSON.parse(raw);
      return Array.isArray(value)
        ? value.filter((id): id is string => typeof id === "string")
        : [];
    } catch {
      return [];
    }
  }, [raw]);
}

export function writePlanIds(ids: string[]) {
  localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify([...new Set(ids)]));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}
