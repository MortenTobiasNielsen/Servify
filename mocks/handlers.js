import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/services", (req, res, ctx) => {
    return res(
      ctx.json([
        "Leje af flyttekasser",
        "Flytning af inventar",
        "Maling indendørs",
      ])
    );
  }),
];
