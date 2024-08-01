import { atom } from "recoil";

export const fixtureTabsState = atom({
  key: "fixtureTabsState",
  default: {
    fixtures: true,
    results: false,
    tables: false,
  },
});
export const fixtureTeamState = atom({
  key: "fixtureTeamState",
  default: {
    men: true,
    women: false,
    academy: false,
    eds: false,
  },
});
export const NewsTabsState = atom({
  key: "NewsTabsState",
  default: {
    all: true,
    men: false,
    women: false,
    academy: false,
    club: false,
  },
});

export const selectedOptionState = atom({
  key: "selectedOptionState", // 고유한 키
  default: "Men's Team", // 기본값
});

export const isOpenState = atom({
  key: "isOpenState",
  default: false,
});

export const hoveredIndexState = atom({
  key: "hoveredIndexState",
  default: 0,
});

export const selectedTypeOptionState = atom({
  key: "selectedTypeOptionState",
  default: "All Competition",
});

export const selectedLocationOptionState = atom({
  key: "selectedLocationOptionState",
  default: "All Location",
});

export const isOpenTypeState = atom({
  key: "isOpenTypeState",
  default: false,
});

export const isOpenLocationState = atom({
  key: "isOpenLocationState",
  default: false,
});

export const hoveredTypeIndexState = atom({
  key: "hoveredTypeIndexState",
  default: 0,
});

export const hoveredLocationIndexState = atom({
  key: "hoveredLocationIndexState",
  default: 0,
});
export const FillterState = atom({
  key: "FillterState",
  default: false,
});

export const activeLinkState = atom({
  key: "activeLinkState",
  default: "",
});
