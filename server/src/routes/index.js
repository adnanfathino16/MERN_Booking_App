import { TestRouter } from "./test.route.js";
import { UserRouter } from "./user.route.js";
import { UploadRouter } from "./upload.route.js";
import { PlacesRouter } from "./places.route.js";
import { BookingRouter } from "./booking.route.js";

const _routes = [
  ["/test", TestRouter],
  ["/user", UserRouter],
  ["/upload", UploadRouter],
  ["/places", PlacesRouter],
  ["/bookings", BookingRouter],
];

export const routes = (app) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
