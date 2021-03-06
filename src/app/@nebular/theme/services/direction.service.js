import { InjectionToken, Optional, Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { share } from 'rxjs/operators';
/**
 * Layout direction.
 * */
/**
 * Layout direction.
 * */
export var NbLayoutDirection;
/**
 * Layout direction.
 * */
(function (NbLayoutDirection) {
    NbLayoutDirection["LTR"] = "ltr";
    NbLayoutDirection["RTL"] = "rtl";
})(NbLayoutDirection || (NbLayoutDirection = {}));
;
/**
 * Layout direction setting injection token.
 * */
export var NB_LAYOUT_DIRECTION = new InjectionToken('Layout direction');
/**
 * Layout Direction Service.
 * Allows to set or get layout direction and listen to it's changes
 */
var NbLayoutDirectionService = /** @class */ (function () {
    function NbLayoutDirectionService(direction) {
        if (direction === void 0) { direction = NbLayoutDirection.LTR; }
        this.direction = direction;
        this.$directionChange = new ReplaySubject(1);
        this.setDirection(direction);
    }
    /**
     * Returns true if layout direction set to left to right.
     * @returns boolean.
     * */
    /**
       * Returns true if layout direction set to left to right.
       * @returns boolean.
       * */
    NbLayoutDirectionService.prototype.isLtr = /**
       * Returns true if layout direction set to left to right.
       * @returns boolean.
       * */
    function () {
        return this.direction === NbLayoutDirection.LTR;
    };
    /**
     * Returns true if layout direction set to right to left.
     * @returns boolean.
     * */
    /**
       * Returns true if layout direction set to right to left.
       * @returns boolean.
       * */
    NbLayoutDirectionService.prototype.isRtl = /**
       * Returns true if layout direction set to right to left.
       * @returns boolean.
       * */
    function () {
        return this.direction === NbLayoutDirection.RTL;
    };
    /**
     * Returns current layout direction.
     * @returns NbLayoutDirection.
     * */
    /**
       * Returns current layout direction.
       * @returns NbLayoutDirection.
       * */
    NbLayoutDirectionService.prototype.getDirection = /**
       * Returns current layout direction.
       * @returns NbLayoutDirection.
       * */
    function () {
        return this.direction;
    };
    /**
     * Sets layout direction
     * @param {NbLayoutDirection} direction
     */
    /**
       * Sets layout direction
       * @param {NbLayoutDirection} direction
       */
    NbLayoutDirectionService.prototype.setDirection = /**
       * Sets layout direction
       * @param {NbLayoutDirection} direction
       */
    function (direction) {
        this.direction = direction;
        this.$directionChange.next(direction);
    };
    /**
     * Triggered when direction was changed.
     * @returns Observable<NbLayoutDirection>.
     */
    /**
       * Triggered when direction was changed.
       * @returns Observable<NbLayoutDirection>.
       */
    NbLayoutDirectionService.prototype.onDirectionChange = /**
       * Triggered when direction was changed.
       * @returns Observable<NbLayoutDirection>.
       */
    function () {
        return this.$directionChange.pipe(share());
    };
    NbLayoutDirectionService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NbLayoutDirectionService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NB_LAYOUT_DIRECTION,] },] },
    ]; };
    return NbLayoutDirectionService;
}());
export { NbLayoutDirectionService };
//# sourceMappingURL=direction.service.js.map