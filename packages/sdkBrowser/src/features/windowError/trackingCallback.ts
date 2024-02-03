import {TrackingPerformance} from "./trackingPerformance";
import {TrackingCrossOriginError} from "./trackingCrossOriginError";
import {TrackingUnhandledrejection} from "./trackingUnhandledrejection";
import {TrackingWindowError} from "./trackingWindowError";

export type trackingCallbackType =
    TrackingPerformance
    | TrackingCrossOriginError
    | TrackingUnhandledrejection
    | TrackingWindowError
