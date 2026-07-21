"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
  PLAN_STORAGE_KEY,
  createEmptyPlan,
  normalizePlan,
  type MyPlanState,
} from "@/lib/plan";

const CHANGE_EVENT = "smokies-plan-change";
const EMPTY_SNAPSHOT = JSON.stringify(createEmptyPlan());

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return localStorage.getItem(PLAN_STORAGE_KEY) || EMPTY_SNAPSHOT;
}

function getServerSnapshot() {
  return EMPTY_SNAPSHOT;
}

function parseSnapshot(raw: string): MyPlanState {
  try {
    return normalizePlan(JSON.parse(raw));
  } catch {
    return createEmptyPlan();
  }
}

function readPlan(): MyPlanState {
  return parseSnapshot(getSnapshot());
}

function writePlan(plan: MyPlanState): MyPlanState {
  const next = normalizePlan({ ...plan, updatedAt: new Date().toISOString() });
  localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(CHANGE_EVENT));
  return next;
}

export function usePlan() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return useMemo(() => parseSnapshot(raw), [raw]);
}

export function usePlanIds() {
  const plan = usePlan();
  return useMemo(() => plan.items.map((item) => item.id), [plan.items]);
}

export function writePlanIds(ids: string[]) {
  const current = readPlan();
  const uniqueIds = [...new Set(ids)];
  const existing = new Map(current.items.map((item) => [item.id, item]));
  const now = new Date().toISOString();

  writePlan({
    ...current,
    items: uniqueIds.map((id) => existing.get(id) ?? { id, addedAt: now }),
  });
}

export function assignPlanDay(id: string, day?: number) {
  const current = readPlan();
  const validDay = typeof day === "number" && day >= 1 && day <= 7 ? Math.trunc(day) : undefined;

  writePlan({
    ...current,
    items: current.items.map((item) =>
      item.id === id
        ? { ...item, day: validDay, isAnchor: validDay ? item.isAnchor : false }
        : item
    ),
  });
}

export function setPlanAnchor(id: string, isAnchor: boolean) {
  const current = readPlan();
  const selected = current.items.find((item) => item.id === id);
  if (!selected?.day) return;

  writePlan({
    ...current,
    items: current.items.map((item) => {
      if (item.id === id) return { ...item, isAnchor };
      if (isAnchor && item.day === selected.day) return { ...item, isAnchor: false };
      return item;
    }),
  });
}

export function setPlanNote(id: string, note: string) {
  const current = readPlan();
  writePlan({
    ...current,
    items: current.items.map((item) =>
      item.id === id ? { ...item, note: note.slice(0, 500) } : item
    ),
  });
}

export function clearPlan() {
  writePlan(createEmptyPlan());
}
