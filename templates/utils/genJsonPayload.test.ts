// Copyright (C) 2022  Aravinth Manivannan <realaravinth@batsense.net>
// SPDX-FileCopyrightText: 2023 Aravinth Manivannan <realaravinth@batsense.net>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import genJsonPayload from "./genJsonPayload";

"use strict";

const payload = {
  username: "Jhon",
};

const value = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
};

it("getFromUrl workds", () => {
  expect(genJsonPayload(payload)).toEqual(value);
});
