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
